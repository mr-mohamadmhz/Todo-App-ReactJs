import { Input } from "antd"
import { useState } from "react"

export default function InputTodoApp({ addTodos }) {

    const [inputValue, setInputValue] = useState([])

    const handleEnter = (e) => {

        if (e.keyCode == 13) {
            addTodos(inputValue)
            setInputValue("")
        } else {
            console.log("null mz")
        }

    }
    return (
        <>
            <Input
                style={{ background: 'var(--body_background)' ,color:'var(--body_color)'}}
                className='w-full placeholder-inherit bg-white outline-none border-none py-4 rounded-[5px] px-4'
                value={inputValue}
                placeholder='Create anew todo...'
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleEnter} />
        </>
    )
}