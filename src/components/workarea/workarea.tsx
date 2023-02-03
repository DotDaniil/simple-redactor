import React from 'react';
import './workarea.styles.css';
import { Props } from "./workarea.types";
import { Controller } from "./controller/cotroller";


export const Workarea: React.FC<Props> = ({nextElement, dropped}) => {

    return (
        <div className='workarea'>
            <h2 className='workarea-heading'>Work Area</h2>
            <Controller elementType={nextElement} dropped={dropped}/>
        </div>
    );
};
