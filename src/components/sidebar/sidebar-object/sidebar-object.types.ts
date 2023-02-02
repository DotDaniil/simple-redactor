import React from "react";

export type Props = {
    innerText: string;
    ableUploadImage: boolean;
    setNextElement: React.Dispatch<React.SetStateAction<string>>
    setDropped: React.Dispatch<React.SetStateAction<boolean>>
}