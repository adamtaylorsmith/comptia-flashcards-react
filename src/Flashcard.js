import React, { useState } from 'react'

export default function Flashcard({ flashcard }) {

    const [flip, setFlip] = useState(false)

    return (
        // <div className='mx-2'>
            <div 
                className={`card ${flip ? 'flip' : ''}`} 
                onClick={() => setFlip(!flip)}
            >
                {flip ? 
                <div className='back'>{flashcard.answer}</div>
                : <div className='front'>{flashcard.question}</div>}
            </div>
        // </div>
        
    )
}
