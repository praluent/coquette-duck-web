'use client';
import React, { useEffect, useState, useRef } from 'react';
import { _Object } from "@aws-sdk/client-s3";
import { getOptions, getTopics ,getQuestions } from "./serverQuizComponents";
import Quiz from './Quiz';

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
            <select className="select select-accent dark:bg-success bg-primary w-full my-4" onChange={handleFolderChange} defaultValue="" >
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
    const [showForm, setForm] = useState<boolean>(false);
    const [numRequested, setNumRequested] = useState<number>(0);
    const [folderResults, setFolderResults] = useState<_Object[]>([]);
    const [fetchedQuestions, setFetchedQuestions] = useState<string[][] | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);
    function openModal(){
        setForm(false);
        setNumRequested(0);
        setFolderResults([]);
        setFetchedQuestions(null);

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
        <main className="flex-col items-center justify-between p-24">
            <h1 className="text-xl font-bold">(Honorary) Hajji Head Brother Muhammad Shoaib Shahbaz's Quiz Generator</h1>
            <h1 className= "font-bold pb-24">Inshallah he gets a first</h1>
            <QuizButton toggleForm={openModal} />
            <div>
                <dialog ref ={dialogRef} id="generate" className="modal">
                    <div className="modal-box bg-primary dark:bg-success dark:text-primary text-success">
                        <h3 className="font-bold text-lg">Generate Questions</h3>
                        <QuizForm onSelectionChange={handleSelectionChange} onNumQuestionsChange={handleNumQuestionsChange} folderResults={folderResults} closeDialog={closeModalfromChild}/>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button onClick={closeModal}>Close</button>
                    </form>
                </dialog>
            </div>
            <div id='selection' className='dark:text-slate-400 text-slate-800'>
                {fetchedQuestions !== null && <Quiz QuestionContent = {fetchedQuestions} numRequested={numRequested}/>}
            </div>
        </main>
    );
}
