import React, {useEffect, useState} from 'react';
import './container.styles.css';
import { Sidebar } from "../sidebar/sidebar";
import { Workarea } from "../workarea/workarea";
import { Workzone } from "../workzone/workzone";

export const Container = () => {
    const [nextElement, setNextElement] = useState('');
    const [dropped, setDropped] = useState(false);

    useEffect(() => {
        if (dropped) {
            setNextElement('');
            setDropped(false)
        }
    }, [nextElement, dropped])

    const workZone = [
        <Sidebar setNextElement={setNextElement} setDropped={setDropped}/>,
        <Workarea nextElement={nextElement} dropped={dropped} />
    ]
    return (
        <div className="simple-redactor">
            <h1 className="heading">Simple Editor</h1>
            <Workzone children={workZone} />
        </div>
    );
};
