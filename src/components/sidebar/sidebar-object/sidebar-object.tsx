import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Props } from './sidebar-object.types';
import './sidebar-object.css';
import returnWorkareaObject from "./return-workarea-object/return-workarea-object";
import {createPortal, render} from "react-dom";
import {createRoot} from "react-dom/client";

const SidebarObject: React.FC<Props> = ({ innerText, ableUploadImage }) => {
    const [everTouched, setEverTouched] = useState(false);
    // const [isDragged, setIsDragged] = useState(false);

    const ref = useRef<HTMLDivElement>(null)
    const { current } = ref;

    // const [defaultY, setDefaultY] = useState<number | undefined>(undefined);
    // const [defaultX, setDefaultX] = useState<number | undefined>(undefined);
    //
    // useEffect(() => {
    //     if (everTouched) {
    //         setDefaultY(current?.offsetTop);
    //         setDefaultX(current?.offsetLeft);
    //     }
    //
    // }, [everTouched])
    // console.log(defaultX, defaultY)
    //
    // const [positionY, setPositionY] = useState(defaultY);
    // const [positionX, setPositionX] = useState(defaultX);
    //
    //
    // useEffect(() => {
    //     if (everTouched && current?.offsetTop && current.offsetLeft) {
    //         setPositionY(current?.offsetTop);
    //         setPositionX(current?.offsetLeft);
    //     }
    //
    // }, [everTouched, current?.offsetTop, current?.offsetLeft])
    //
    // const handleDrag = useCallback(() => {
    //     setEverTouched(true);
    //     // setPositionY(current?.offsetTop);
    //     // setPositionX(current?.offsetLeft);
    //     console.log('drag');
    //
    // },[])
0
    const handleDrop = useCallback(() => {
        const workarea = document.querySelector('.workarea')
        const child = returnWorkareaObject(ableUploadImage, 200, 200);
        console.log('drop');

    },[current]);

    return (
        <div
            draggable
            className="sidebar-object"
             // onDragStart={handleDrag}
             onDragEnd={handleDrop}
             ref={ref}>
            <h2 className="sidebar-object-text">{innerText}</h2>
        </div>
    );
};

export default SidebarObject;