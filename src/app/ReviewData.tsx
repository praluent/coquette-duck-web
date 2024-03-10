import React from 'react';

interface ReviewDataProps {
    responses: [string, boolean][];
    questions: string[][];
    highlightFunction: (isCorrect: boolean) => string; // Define highlightFunction as a function type
}

export function ReviewData({ responses, questions, highlightFunction }: ReviewDataProps) {
    return (
        <table id="review-table">
            <thead>
                <tr>
                    <th>Question</th>
                    <th>Your Answer</th>
                    <th>Correct Answer</th>
                </tr>
            </thead>
            <tbody>
                {responses.map((response, index) => (
                    <tr key={index}>
                        <td>{questions[index][0]}</td>
                        <td style={{ color: highlightFunction(response[1]) }}>
                            {response[0]}
                        </td>
                        <td>{questions[index][2].replace(/^[A-Z]\. /, '')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
