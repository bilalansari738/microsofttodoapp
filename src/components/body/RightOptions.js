import React from 'react';
import './RightOptions.css';

export default function Body() {
    return (
        <div className='right-options p-2'>
            <div className='notes-div'><i className="bi bi-sun px-3"></i>Add to My Day</div>
            <div className='three-notes'>
                <div className='bottom-border'><i className="bi bi-bell px-3"></i>Remind me</div>
                <div className='bottom-border'><i className="bi bi-calendar px-3"></i>Add due date</div>
                <div className='repeat-note'><i className="bi bi-calendar3 px-3"></i>Repeat</div>
            </div>
            <div className='notes-div'><i className="bi bi-tag px-3"></i>Pick a category</div>
            <div className='notes-div'><i className="bi bi-paperclip px-3"></i>Add file</div>
            <div className='addnote px-4'>Add note</div>
        </div>
    )
}