import React from 'react';
import { Props } from "./workzone.types";
import './workzone.styles.css';

export const Workzone: React.FC<Props> = ( { children }) => {
    return (
        <div className="workzone">
            {children}
        </div>
    );
};
