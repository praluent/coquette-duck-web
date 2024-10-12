import React from 'react';

export function NextIcon(){
    return(
        <div className="icon-container w-full h-full text-sm text-slate-200 hover:text-slate-600">
            <svg width={30} height={30} viewBox="0 0 50 50" className='mx-auto'>
                <polygon points="10,15 40,25 10,35" fill="#5490cc" stroke="#FCFCFC" strokeWidth="4"/>
            </svg>
            <p>Next</p>
        </div>
    )
}

export function PrevIcon() {
    return (
        <div className="icon-container w-full h-full text-sm text-slate-200 hover:text-slate-600">
            <svg width={30} height={30} viewBox="0 0 50 50" className='mx-auto'>
                <polygon points="40,15 10,25 40,35" fill="#5490cc" stroke="#FCFCFC" strokeWidth="4"/>
            </svg>
            <p>Previous</p>
        </div>
    );
}

export function LabValuesIcon(){
    return(
        <div className='w-full h-full text-sm text-slate-200 hover:text-slate-600'>

            <svg width={30} height={30} viewBox='0 0 50 50' className='mx-auto'>
                <defs>
                    <linearGradient id="yellowBeaker" x2="0" y2="1">
                        <stop offset="15%" stopColor="rgba(255,255,255,0.7)" />
                        <stop offset="17%" stopColor="yellow" />
                    </linearGradient>
                    <linearGradient id="pinkBeaker" x2="0" y2="1">
                        <stop offset="30%" stopColor="rgba(255,255,255,0.7)" />
                        <stop offset="35%" stopColor="pink" />
                    </linearGradient>
                    <linearGradient id="tealBeaker" x2="0" y2="1">
                        <stop offset="40%" stopColor="rgba(255,255,255,0.85)" />
                        <stop offset="42%" stopColor="skyblue" />
                    </linearGradient>
                </defs>

                <symbol id="labsIcon" viewBox="0 0 260 340">
                    <rect x="59" y="30" width="140" height="200" rx="20" ry="20" fill="url(#yellowBeaker)" />
                    <rect x="175" y="14" width="55" height="290" rx="10" ry="10" fill="url(#pinkBeaker)" />
                    <path d="M50,90 l-35,130 t-1,30 0,30 t48,20 130,-20 v-60 l-35-130 z" fill="url(#tealBeaker)" />

                </symbol>

                <use xlinkHref="#labsIcon" />
            </svg>
            <p>Lab Values</p>

        </div>

    )
}
export function EndBlockIcon(){
    return(
        <div className='flex flex-col items-end justify-end text-sm text-slate-200 hover:text-slate-600 pr-2'>
            <svg width={30} height={30} viewBox='0 0 40 40' className='mx-auto'>
                
                <symbol id="stopIcon" height="40" width="40" viewBox="0 0 40 40">
                    <path style={{ fill: "#A00", stroke: "#A00" }} d="M 3 16 L 3 26 L 11 34 L 21 34 L 29 26 L 29 16 L 21 8 L 11 8 z" />
                    <path style={{ fill: "#F00", stroke: "#FFF", strokeWidth: 2 }} d="M 5 17 L 5 25 L 12 32 L 20 32 L 27 25 L 27 17 L 20 10 L 12 10 z" />
                </symbol>

                <use xlinkHref="#stopIcon" />
            </svg>
            <p>End Block</p>
        </div>
    )
}
export function GenerateQuizIcon(){
    return(
        <div className='flex flex-col items-end justify-end text-sm text-slate-200 hover:text-slate-600'>
            <svg width={30} height={30} viewBox='0 0 50 50' className='mx-auto mb-1'>
                <path d="M 15 20 v 30 M 0 35 h 30" stroke="white" strokeWidth="6" />
             </svg>
             <p>Create Quiz</p>
        </div>



    )

}

export function CulturalEnrichment(){
    return( 
    <div className='flex flex-col items-end justify-end text-sm text-slate-200 hover:text-slate-600'>
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='mx-auto'>
            <circle cx="5.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="15.5" r="2.5"/><path d="M8 17V5l12-2v12"/>
        </svg>
        <p>Cultural Enrichment</p>
    </div>
    )


}
export function MarkFlagIcon(){
    return(
        <svg width="24" height="20" viewBox="0 0 24 20">
            <defs>
                <g id="flag">
                    <line className="icon" x1="10" y1="35" x2="1.5" y2="4" />
                    <path className="icon" d="M20,8c-2,3-4,7-7,8c-2,1-5,2-7,3 C5,14,4,9,1,5C8,1,13,10,20,8z" />

                </g>
            </defs>
            <symbol id="whiteflag" viewBox="0 0 16 20">
                <use xlinkHref="#flag" style={{ stroke: "#FCFCFC", strokeWidth: 2.2, fill: "#B70808" }} />

            </symbol>
            <use xlinkHref="#whiteflag" />

        </svg>
    )
}