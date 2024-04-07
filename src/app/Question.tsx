'use client';
import React, { SetStateAction } from 'react';

interface QuestionProps {
    body: [prompt: string, options: string[], correct: string];
    setSelectedOption: React.Dispatch<SetStateAction<[string, boolean]>>;
}

export function Question({ body, setSelectedOption }: QuestionProps) {
    const prompt = body[0];
    const options = body[1];
    const answer = body[2];

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption([event.target.value, event.target.value.toLowerCase() === answer.toLowerCase().replace(/^[a-z]\. /, '')]);
    };

    return (
        <div className='max-w-1/2'>
            <h2>{prompt}</h2>
            <div id="options-container" className='flex flex-col items-start' >
                <ol className='border border-black rounded p-2'>
                {options.map((option: string, index: number) => (
                    <div className="" key={prompt + index} >
                        <label className=''>

                            <li className='hover:bg-slate-200 rounded px-1'>
                                    <input
                                        type="radio"
                                        name="option"
                                        className=""
                                        value={option}
                                        id={"option" + (index + 1)}
                                        onChange={handleOptionChange}
                                    />
                                    <span className='label-text text-black ml-2'>{option}</span>
                            </li>
                        </label>

                        
                    </div>
                ))}</ol>
            </div>
        </div>
    );
}

export default Question;
