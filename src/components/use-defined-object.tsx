import React, {useEffect, useState} from 'react';

function useDefinedObject (nextElement?: string, isDropped?: boolean) {
    const [definedObject, setDefinedObject] = useState<string>('')
    const [dropped, setDropped] = useState(false);

    useEffect(() => {
        // if (definedObject) {
        //     setDefinedObject(definedObject)
        // }
        console.log(definedObject, dropped,  'defined')

    },[definedObject, dropped])
    return {setDefinedObject, setDropped, definedObject, dropped}
}

export default useDefinedObject;
