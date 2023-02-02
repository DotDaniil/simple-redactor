import React from 'react';
import './container.styles.css';
import SidebarObject from "../sidebar/sidebar-object/sidebar-object";
import {Sidebar} from "../sidebar/sidebar";

export const Container = () => {
    return (
        <div className="simple-redactor">
            <h1 className="heading">Simple Redactor</h1>
            <SidebarObject innerText="Test Text" ableUploadImage={false}/>
            <Sidebar />
        </div>
    );
};
