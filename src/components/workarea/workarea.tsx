import React, {useCallback, useEffect, useRef, useState} from 'react';
import './workarea.styles.css';
import {Props} from "./workarea.types";
import {Controller} from "./controller/cotroller";


export const Workarea: React.FC<Props> = ({nextElement, dropped}) => {
    // const [nextElement, setNextElement] = useState('')
    // const [height, setHeight] = useState<string | undefined>('')
    // const ref = useRef<HTMLDivElement & { nextelement: string }>(null)
    // const { current } = ref;

    // useEffect(() => {
    //     setWidth(String(current?.clientWidth))
    //     setHeight(String(current?.clientHeight))
    // },[current?.clientWidth, current?.clientHeight])

    // console.log(current?.nextelement, 'hnextELEMENT!!!!')
    // useEffect(() => {
    //     // const nextElementFromProps = ref.current?.nextelement;
    //     setNextElement(current?.nextelement ?? '');
    //     console.log(current, 'hnextELEMENT!!!!')
    // },[current])




    return (
        <div className='workarea'>
            <Controller elementType={nextElement} dropped={dropped}/>
        </div>
    );
};
