import React, { useCallback, useEffect, useRef, useState } from 'react';
import './image.styles.css';


interface HTMLInputEvent extends React.MouseEvent<HTMLInputElement, MouseEvent> {
    target: HTMLInputElement;
}

const Image = () => {

    const [image, setImage] = useState<File | null>(null);

    const [preview, setPreview] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (image) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(image);
        } else {
            setPreview(null)
        }
    }, [image]);

    const handleClick = useCallback((event: HTMLInputEvent) => {
        event.preventDefault();
        fileInputRef.current?.click();

        const file = event.target.files;
        if (file) {
            setImage(file[0]);
        } else {
            setImage(null);
        }
    }, [])

    return (
        <div className="image-container">
            {preview ? <img alt="img" className="image" src={preview as string || undefined}/> : <input className="image-input" ref={fileInputRef} type="file" onChange={handleClick} />}
        </div>
    );
};

export default Image;