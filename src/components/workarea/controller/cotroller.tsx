import React, {useCallback, useEffect, useMemo, useState} from 'react';
import { Props } from "./controller.types";
import Textarea from "../textarea/textarea";
import Image from  "../image/image";
import './controller.styles.css';
import useWindowDimensions from "../../../utils/useWindowDimension";

export const Controller: React.FC<Props> = ({ elementType, dropped }) => {

    const [appState, setAppState] = useState<string[]>([]);
    const [dividedState, setDividedState] = useState<string[][]>([[]]);
    const {width, height} = useWindowDimensions();
    const isTablet = width < 1405 && width > 768;
    const isMobile = width < 768 && width < 1024;

    console.log(width);

    useEffect(() => {
        if (elementType && dropped) {
            setAppState((prevState) => [...prevState, elementType])
        }
        console.log('FINALISE', appState);
    },[dropped]);

    useEffect(() => {
        let size = 4;
        if (isMobile) size = 16
        if (isTablet) size = 8;

        let subarray = [];
        for (let i = 0; i <Math.ceil(appState.length/size); i++){
            subarray[i] = appState.slice((i*size), (i*size) + size);
        }
        setDividedState(subarray)
        console.log(dividedState, 'DEVIDED');

        if (appState.length > 16) {
            setAppState((prevState) => [...prevState.slice(0, 16)])
        }
    }, [appState, isTablet, isMobile])

    return (
        <div className='controller'>
            {dividedState.map((el, idx) => (
                <div className='column' key={idx}>
                    {el.map(el_inside => (
                    el_inside === 'textarea' ? <Textarea /> : <Image />))}
                </div>))}
        </div>
    );
};
