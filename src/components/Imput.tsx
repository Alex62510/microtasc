import React, {ChangeEvent} from 'react';

export type ImputPropsType = {
    title: string
    setTitle: (title: string) => void
}
export const Imput = (props: ImputPropsType) => {
    const onChangeImputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
        return (
            <input value={props.title} onChange={onChangeImputHandler}/>
        )
    }




