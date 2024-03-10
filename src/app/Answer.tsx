import React from 'react';

interface AnswerProps {
    question: [prompt: string, options: string[], correct: string];
    response: string[];
}

export function Answer({ question, response }: AnswerProps) {
    const [prompt, options, correct] = question;

    const isCorrect = (value: string): string => {
        if (value.toLowerCase() === correct.toLowerCase().replace(/^[a-z]\. /, '')) {
            return 'lightgreen';
        } else {
            return '';
        }
    };

    const isChecked = (value: string): boolean => {
        return value.toLowerCase() === response[0].toLowerCase().replace(/^[a-z]\. /, '');
    };

    return (
        <div>
            <h2>{prompt}</h2>
            <div id="options-container">
                {options.map((option: string, index: number) => (
                    <div className="option" key={prompt + index}>
                        {isCorrect(option) && <label className='label cursor-pointer rounded-full my-1 bg-lime-400'>
                            <span className='label-text ml-2 text-info dark:text-primary'>{option}</span>
                            <input
                                type="radio"
                                name="option"
                                className='radio radio-primary ml-2'
                                value={option}
                                id={"option" + (index + 1)}
                                disabled={true}
                                checked={isChecked(option)}
                            />
                        </label>}
                        {!isCorrect(option) && <label className='label cursor-pointer rounded-full my-1 dark:bg-success bg-secondary'>
                            <span className='label-text ml-2 text-info dark:text-primary'>{option}</span>
                            <input
                                type="radio"
                                name="option"
                                className='radio radio-primary ml-2'
                                value={option}
                                id={"option" + (index + 1)}
                                disabled={true}
                                checked={isChecked(option)}
                            />
                        </label>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Answer;
