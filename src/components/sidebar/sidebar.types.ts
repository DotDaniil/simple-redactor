import React from "react";

export type Props = {
    setNextElement: React.Dispatch<React.SetStateAction<string>>
    setDropped: React.Dispatch<React.SetStateAction<boolean>>
}