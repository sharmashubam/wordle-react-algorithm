import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context'

const Key = ({ keyVal, bigKey,disabled }) => {
    const {onDelete,onEnter,onSelectLetter } = useContext(Context)
    const selectLetter = () => {
        if (keyVal === "ENTER") {
          onEnter();
        } else if (keyVal === "DELETE") {
           onDelete()
        }
        else {
            onSelectLetter(keyVal) 
        }


    }
    return (
        <div className='key' id={bigKey ? "big" : disabled && "disabled"} onClick={selectLetter} >{keyVal}</div>
    )
}

export default Key