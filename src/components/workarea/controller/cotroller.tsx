import React, {useEffect, useState} from 'react';
import { Props } from "./controller.types";

export const Controller: React.FC<Props> = ({ elementType, dropped }) => {

    const [appState, setAppState] = useState<string[]>([]);
    useEffect(() => {
        if (elementType && dropped) {
            setAppState((prevState) => [...prevState, elementType])
        }
        console.log('FINALISE', appState);
    },[dropped]);


    return (
        <div className='controller'>{appState.map(el => (
            <div>{el}</div>
        ))}</div>
    );
};
