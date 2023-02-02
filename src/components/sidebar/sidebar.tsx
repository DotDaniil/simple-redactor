import React, {useEffect, useState} from 'react';

export const Sidebar = () => {
    const [mousePos, setMousePos] = useState({});

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
    return (
        <div>
            <div className="workarea"></div>
        </div>
    );
};
