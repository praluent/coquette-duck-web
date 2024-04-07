import React, {useState} from 'react';

interface LabHeadersProps {
    setTab: React.Dispatch<React.SetStateAction<number>>;
    activeTab: number;
}

function LabHeaders(props: LabHeadersProps) {
    const {setTab, activeTab} = props;

    return (
    
        <div className='relative border-b'>
            <ul id="tabs" className='flex justify-between cursor-pointer space-x-8 z-0'>
                <li className={activeTab === 1 ? 'border border-black border-b-0 pl-4 p-2 relative z-10 bg-white' : 'border pl-4 p-2 relative z-10 bg-white'} onClick={() => {setTab(1)}}>Serum</li>
                <li className={activeTab === 2 ? 'border border-black border-b-0 p-2 relative z-10 bg-white' : 'border p-2 relative z-10 bg-white'} onClick={() => {setTab(2)}}>Cerebrospinal</li>
                <li className={activeTab === 3 ? 'border border-black border-b-0 p-2 relative z-10 bg-white' : 'border p-2 relative z-10 bg-white'} onClick={() => {setTab(3)}}>Blood</li>
                <li className={activeTab === 4 ? 'border border-black border-b-0 pr-4 p-2 relative z-10 bg-white' : 'border pr-4 p-2 relative z-10 bg-white'} onClick={() => {setTab(4);}}>Urine and BMI</li>
            </ul>
        </div>
    )


}

export default LabHeaders;