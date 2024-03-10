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
        <div>
            <h2>{prompt}</h2>
            <div id="options-container" >
                {options.map((option: string, index: number) => (
                    <div className="form-control" key={prompt + index} >
                        <label className='label cursor-pointer rounded-full my-1 dark:bg-success bg-secondary'>
                            <span className='label-text text-info dark:text-primary ml-2'>{option}</span>
                            <input
                                type="radio"
                                name="option"
                                className="radio radio-primary"
                                value={option}
                                id={"option" + (index + 1)}
                                onChange={handleOptionChange}
                            />
                        </label>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Question;
