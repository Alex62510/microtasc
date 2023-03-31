import React, {ChangeEvent, useState} from 'react';
export type PropsType={

    addMessage:(title:string)=>void
}
export const FullImput = (props:PropsType) => {
    let [title, setTitle]=useState('')

    const onChangeImputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }
const onclickButtonHandler=()=>{
        props.addMessage(title)
    setTitle("")
}
    return (
        <div>
            <input value={title} onChange={onChangeImputHandler}/>
            <button onClick={onclickButtonHandler}>+</button>
        </div>
    );
};

