'use client';
import React, { useEffect, useState, useRef } from 'react';
import { _Object } from "@aws-sdk/client-s3";
import { getOptions, getTopics ,getQuestions } from "./serverQuizComponents";
import Quiz from './Quiz';
import NavBar from './NavBar';
import { NextIcon, PrevIcon, MarkFlagIcon, EndBlockIcon, LabValuesIcon, GenerateQuizIcon, WhiteWomanMusicIcon } from './Icons';
import LabValues from './LabValues';
import LabHeaders from './LabHeaders';

interface QuizButtonProps {
    toggleForm: () => void;
    
  }
interface CheckedBoxesState {
    [key: string]: boolean;
}

export function SubmitButton({ closeModal }: { closeModal: () => void }) {
    return (
        <div>
            <button className="btn btn-accent w-full my-2" onClick={closeModal}>Submit</button>
        </div>
    )
}

export function SelectFiles({ options, folderName, onSelectionChange, onNumQuestionsChange, closeDialog }: { options: string[]; folderName: string; onSelectionChange: (selection: string[]) => void; onNumQuestionsChange: (num: number) => void; closeDialog: () => void }) {
    const [checkedOptions, setCheckedOptions] = useState<CheckedBoxesState>({});
    const [selection, setSelection] = useState<string[]>([]);
    const [numQuestions, setNumQuestions] = useState<number>(0);
    const formattedFolderName = folderName.slice(0, -1);
    
    const regex = new RegExp(`${formattedFolderName}/([A-Za-z0-9_]+) questions\\.json`)
    const filteredOptions = options.filter((option)=> option !== folderName)
    
    function onSubmitClicked(){
        const temporaryOptionList:string[] = [];
        for (const option in checkedOptions) {
            if (checkedOptions[option]) {
                temporaryOptionList.push(option);
                // Perform any other operations based on checked options
            } 
        }
        setSelection(temporaryOptionList);
        onSelectionChange(temporaryOptionList); // Pass selection to parent component
        onNumQuestionsChange(numQuestions);
        closeDialog();

    }
    const handleCheckboxChange = (option: string) => {
        setCheckedOptions(prevState => ({
            ...prevState,
            [option]: !prevState[option] // Toggle the checkbox state
        }));
    };

    const checkBoxes = filteredOptions.map((option, index) => (
        <div key={folderName + option + index} className="flex items-start mb-4 ">
            <label className="cursor-pointer flex items-start">
                <input type="checkbox" className="checkbox checkbox-sm mt-1 mr-2 checkbox-accent"
                checked={checkedOptions[option] || false} // Set checked attribute based on state
                onChange={() => handleCheckboxChange(option)} />
                <span className="label-text dark:text-secondary text-info">{option.replace(regex, "$1").replace(/_/g, " ")}</span>
            </label>
        </div>
    ));
    function handleNumQuestions(event:React.ChangeEvent<HTMLInputElement>){
        setNumQuestions(Number(event.target.value))
    }
    return (
        <div id="select-files-container">
            <div className="inline-grid gap-4 grid-cols-3 form-control">
                {checkBoxes}
            </div>
            <input className='w-full text-lg input input-accent input-bordered dark:bg-success bg-primary' min={0} type='number' placeholder='Enter Number of Questions' onChange={handleNumQuestions}></input>
            <SubmitButton closeModal={onSubmitClicked} />
        </div>
    );
}

export function SelectFolder({ options, onSelectionChange, onNumQuestionsChange, onCloseDialog }: { options: _Object[]; onSelectionChange: (selection: string[]) => void; onNumQuestionsChange: (num: number) => void; onCloseDialog: () => void}) {
    const [selectedFolder, setFolderSelection] = useState<string>("");
    const [fileTitles, setFileTitles] = useState<string[]>([]);

    const clickableOptions: React.ReactNode[] = options.map((option, index) => (
        <option key={option.Key}>
            {option.Key}
        </option>
    ));

    function handleFolderChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setFolderSelection(event.target.value)
    }

    useEffect(() => {
        if (selectedFolder !== "") {
            getTopics(selectedFolder).then((topics:any) => {
                if (topics !== undefined) {
                    setFileTitles(topics);
                }
            });
        }
    }, [selectedFolder]);

    return (
        <div>
            <select className="select select-accent dark:bg-slate-600 bg-white w-full my-4" onChange={handleFolderChange} defaultValue="" >
                <option disabled value="">Select Folder</option>
                {clickableOptions}
            </select>
            {selectedFolder !== "" && fileTitles !== undefined && <SelectFiles options={fileTitles} folderName={selectedFolder} onSelectionChange={onSelectionChange} onNumQuestionsChange={onNumQuestionsChange} closeDialog={onCloseDialog}/>}
        </div>

    )
}

export function QuizForm({ onSelectionChange, onNumQuestionsChange, folderResults, closeDialog }: { onSelectionChange: (selection: string[]) => void; onNumQuestionsChange: (num: number) => void; folderResults: _Object[]; closeDialog: () => void}) {
    

    return (
        <div>
            <SelectFolder options={folderResults} onSelectionChange={onSelectionChange} onNumQuestionsChange={onNumQuestionsChange} onCloseDialog={closeDialog}/>
        </div>  
    )
}

export const QuizButton: React.FC<QuizButtonProps> = ({ toggleForm }) => {
    return (
        <div>
            <button className="bg-blue-300 hover:bg-blue-100 text-blue-50 hover:text-blue-300 border-blue-300 font-bold py-2 px-4 rounded border-4 inline-flex items-center absolute top-20 right-20" onClick={toggleForm}>
                <svg className="h-20 w-20" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/>
                </svg>
            </button>
        </div>
    );
}

export default function ClientHome() {
    type selectedOptionTuple = [string, boolean]

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswerIndex, setCurrentAnswerIndex] = useState<number>(-1);
    const [responses, setResponses] = useState<selectedOptionTuple[]>([]);
    const [selectedOption, setSelectedOption] = useState<selectedOptionTuple>(["", false]);
    const [showForm, setForm] = useState<boolean>(false);
    const [numRequested, setNumRequested] = useState<number>(0);
    const [folderResults, setFolderResults] = useState<_Object[]>([]);
    const [fetchedQuestions, setFetchedQuestions] = useState<string[][] | null>(null);
    const [quizQuestions, setQuizQuestions] = useState<string[][]>([]);
    const [showLabValues, setShowLabValues] = useState<boolean>(false);
    const [showLabTab, setShowLabTab] = useState<number>(1);
    const [showSI, setShowSI] = useState<boolean>(false);
    const dialogRef = useRef<HTMLDialogElement>(null);
    const closeBlockRef = useRef<HTMLDialogElement>(null);
    function openModal(){
        setForm(false);
        setNumRequested(0);
        setFolderResults([]);
        setFetchedQuestions(null);
        setCurrentAnswerIndex(-1);
        setCurrentQuestionIndex(0);
        getOptions().then((options:any) => {
            setForm(!showForm);
            setFolderResults(options);
            dialogRef.current?.showModal()

        })
        
    }
    function closeModalfromChild(){
        dialogRef.current?.close();
    }

    function closeModal() {
        
        setForm(false);
    }

    function handleSelectionChange(selection: string[]) {
        getQuestions(selection).then((questions:any) => {
            setFetchedQuestions(questions);

        });
    }

    function handleNumQuestionsChange(num: number) {
        setNumRequested(num);
    }
    
    return (
        <div className='flex-grow pt-[3.5rem] pb-[3.5rem] bg-[#FCFCFC]'>
            {fetchedQuestions !== null && 
            
                <header className='fixed w-screen h-[3.5rem] bg-banner top-0 z-0 flex justify-between items-center pl-20'>
                    
                    <div className='flex'>
                        <label className='pl-2 space-x-1 flex items-center'>
                            <input type="checkbox" />
                            <MarkFlagIcon />
                            <span>Mark</span>
                        </label>
                    </div>
                    <div className='flex'>
                        <button className= 'rounded hover:bg-slate-200 px-2' disabled={currentQuestionIndex === 0} onClick={()=> setCurrentQuestionIndex(currentQuestionIndex-1)}>
                            <PrevIcon />
                        </button>
                        <div className='px-2'></div>
                        <button className='rounded hover:bg-slate-200 px-2' disabled={currentQuestionIndex===numRequested-1} onClick={()=> setCurrentQuestionIndex(currentQuestionIndex+1)}>
                            <NextIcon />
                        </button>
                    </div>
                    <div className='pr-2'>
                        <button className='rounded hover:bg-slate-200 px-2' onClick={()=> setShowLabValues(!showLabValues)}>    
                            <LabValuesIcon />
                            
                        </button>
                    </div>
                </header>}
        <main className="flex-col items-center justify-between bg-[#FCFCFC]">
            
            <div className="flex-1 pl-20">        
                {!fetchedQuestions && 
                <div>
                    <h1 className="text-xl font-bold">(Honorary) Hajji Head Brother Muhammad Shoaib Shahbaz's Quiz Generator</h1>
                    <h1 className= "font-bold pb-24">Inshallah he gets a first</h1>
                    <br />
                    <br />
                    <p className='text-xs'>The following software is purely for educational non-profit use and is covered by Fair Use AFAIK... Any questions, concerns, or bugs can be sent to: syeda7d5@gmail.com. please don't spam it.</p>
                    <br />
                    <br />
                    <p className='text-xs'><a className='text-cyan-600 underline' href='https://youtu.be/LHaEub0kxOw?si=8TPgJChjSixhUe1X'>apologies in advance</a> for any offense generated, however small</p>
                </div>}

                {quizQuestions.length ===0 && <QuizButton toggleForm={openModal} />}
                
                <div>
                    <dialog ref ={dialogRef} id="generate" className="modal">
                        <div className="modal-box bg-white dark:bg-slate-600 dark:text-white text-slate-600">
                            <h3 className="font-bold text-lg">Generate Questions</h3>
                            <QuizForm onSelectionChange={handleSelectionChange} onNumQuestionsChange={handleNumQuestionsChange} folderResults={folderResults} closeDialog={closeModalfromChild}/>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button onClick={closeModal}>Close</button>
                        </form>
                    </dialog>
                </div>
                <div id='selection' className='text-black relative'>
                    {fetchedQuestions !== null && 
                        <div className='pl-5'>
                            <Quiz 
                                QuestionContent = {fetchedQuestions}
                                numRequested={numRequested}
                                currentQuestionIndex={currentQuestionIndex}
                                setCurrentQuestionIndex={setCurrentQuestionIndex}
                                currentAnswerIndex={currentAnswerIndex}
                                setCurrentAnswerIndex={setCurrentAnswerIndex}
                                quizQuestions={quizQuestions}
                                setQuizQuestions={setQuizQuestions}
                                responses={responses}
                                setResponse={setResponses}
                                selectedOption={selectedOption}
                                setSelectedOption={setSelectedOption}
                            />
                        </div>
                    }
                </div>
                <div>
                    
                    {showLabValues && 
                        <section className='fixed right-0 top-[3.5rem] bg-white shadow-lg flex flex-col text-xs text-black overflow-scroll'>
                            <label>
                                <input type='checkbox' className='m-2' onChange={()=> setShowSI(!showSI)} />
                                Show SI Units
                            </label>
                            <LabHeaders setTab={setShowLabTab} activeTab={showLabTab} />
                            <LabValues currentTab={showLabTab} showSI={showSI} />
                        </section>
                        
                    }

                </div>
            </div>
            
        </main>
        <div className='fixed top-10 left-0 z-10'>
                {quizQuestions.length !== 0 && <NavBar questionsList={quizQuestions} setQuestionIndex={setCurrentQuestionIndex} questionIndex={currentQuestionIndex} />}
            </div>
        {fetchedQuestions!== null && <footer className='fixed flex w-screen h-[3.5rem] bottom-0 bg-banner justify-between items-end z-0 pl-20'>
                <div className='flex justify-end rounded hover:bg-slate-200 px-2'>
                    <button onClick={openModal}>
                        <GenerateQuizIcon />
                    </button>
                </div>
                <div className='flex justify-end rounded hover:bg-slate-200 px-2'>
                    <a href='https://www.youtube.com/watch?v=b1kbLwvqugk'>
                        <WhiteWomanMusicIcon />
                    </a>


                </div>
                <div className='flex justify-end rounded hover:bg-slate-200 px-2'>
                    <button onClick={()=> closeBlockRef.current?.showModal()}>
                        <EndBlockIcon />
                    </button>
                    <div>
                            <dialog ref={closeBlockRef} id="generate" className="modal">
                                <div className=" bg-white text-black p-8 rounded">
                                    <p>Are you sure you want to end the block?</p>
                                    <br />
                                    <div className='flex justify-between px-4"'>
                                        <button className='bg-gradient-to-b from-[#EE5F5B] to-[#BD362F] hover:from-[#BD362F] hover:to-[#DA4F49] text-white font-bold px-8 rounded border border-black' onClick={()=> location.reload()}>Yes</button>
                                        <button className='bg-gradient-to-b from-[#5490CC] to-[#004976] hover:from-[#004976] hover:to-[#5490CC] text-white font-bold px-8 rounded border border-black' onClick={()=> closeBlockRef.current?.close()}>No</button>
                                    </div>
                                </div>
                            </dialog> 
                        </div>
                </div>
            </footer>}
        </div>
    );
}
