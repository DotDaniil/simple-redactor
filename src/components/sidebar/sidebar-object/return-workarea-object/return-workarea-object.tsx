import React from 'react';

function returnWorkareaObject ( ableUploadImage: boolean, posX?: number, posY?: number ) {
    return ableUploadImage ? (
        <div></div>
    ) : (
        <div className="object-textarea" style={{top: posY, left: posX }}>
            <textarea></textarea>
        </div>
    );
};

export default returnWorkareaObject;