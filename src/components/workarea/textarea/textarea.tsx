import React from 'react';
import './textarea.css';

const Textarea = () => {
    return (
        <div className="textarea-container">
            <h2 className="textarea-heading">Text Area</h2>
            <textarea className="textarea" rows={4} cols={50} placeholder="Text Area" autoFocus />
        </div>
    );
};

export default Textarea;