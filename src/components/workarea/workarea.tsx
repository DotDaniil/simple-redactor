import React, {useCallback, useEffect, useRef, useState} from 'react';
import './workarea.styles.css';
import { Props } from "./workarea.types";
import { Controller } from "./controller/cotroller";
import useWindowDimensions from "../../utils/useWindowDimension";


export const Workarea: React.FC<Props> = ({nextElement, dropped}) => {
    // const {width, height} = useWindowDimensions();
    // const isTablet = width < 1024 && width > 768;
    // const isMobile = width < 768 && width < 1024;

    return (
        <div className='workarea'>
            <h2 className='workarea-heading'>Work Area</h2>
            <Controller elementType={nextElement} dropped={dropped}/>
        </div>
    );
};
