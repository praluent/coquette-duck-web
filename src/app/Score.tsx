import React from 'react';

interface ScoreProps {
    responses: [string, boolean][];
}
export function Score({ responses }: ScoreProps) {
    let tally = 0;

    responses.forEach((response) => {
        if (response[1]) {
            tally++; // Increment tally for each correct response
        }
    });

    return (
        <h4>
            {tally} / {responses.length}
        </h4>
    );
}

export default Score;
