import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Props } from './sidebar-object.types';
import './sidebar-object.css';

export const SidebarObject: React.FC<Props> = ({ innerText, ableUploadImage, setNextElement, setDropped }) => {
    const [mousePos, setMousePos] = useState({x: 0, y: 0});

    const ref = useRef<HTMLDivElement>(null)
    const { current } = ref;

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };

    }, []);

    const workarea = document.querySelector('.workarea');
    const handleDrag = useCallback(() => {
        setNextElement(ableUploadImage ? 'image': 'textarea')
    },[])

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        const workareaX = workarea?.getBoundingClientRect().x;
        const workareaY = workarea?.getBoundingClientRect().y;

        const border = 6;

        const xCondition = event.clientX >= (workareaX  ?? 0) && event.clientX <= (workarea?.clientWidth ?? 0) + (workareaX ?? 0) + border;
        const yCondition = event.clientY >= (workareaY  ?? 0) && event.clientY <= (workarea?.clientHeight ?? 0) + (workareaY ?? 0) + border;

        if (xCondition && yCondition) {
            console.log('DROP IN ZONE!')
            setDropped(true);
        }



    },[current, mousePos.x, mousePos.y]);

    return (
        <div
            draggable
            className="sidebar-object"
            onDragStart={handleDrag}
            onDragEnd={event => handleDrop(event)}
            ref={ref}>
            <h2 className="sidebar-object-text">{innerText}</h2>
        </div>
    );
};