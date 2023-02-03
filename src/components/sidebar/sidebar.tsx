import React from 'react';
import './sidebar.styles.css';
import SidebarObject from "./sidebar-object";
import { Props } from "./sidebar.types";

export const Sidebar: React.FC<Props> = ({ setNextElement, setDropped }) => {

    return (
        <div className="sidebar">
            <h2 className="sidebar-heading">Sidebar</h2>
            <SidebarObject innerText={'Text'} ableUploadImage={false} setNextElement={setNextElement} setDropped={setDropped}/>
            <SidebarObject innerText={'Image'} ableUploadImage setNextElement={setNextElement} setDropped={setDropped}/>
        </div>
    );
};
