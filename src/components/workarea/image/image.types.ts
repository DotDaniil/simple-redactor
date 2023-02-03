import React from "react";

export interface HTMLInputEvent extends React.MouseEvent<HTMLInputElement, MouseEvent> {
    target: HTMLInputElement;
}