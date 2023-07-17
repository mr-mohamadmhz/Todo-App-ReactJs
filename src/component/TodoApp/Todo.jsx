import { DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { useState } from 'react'

export default function Todo({ task, toggleCompleted, deleteTodo }) {
    console.log({ task })
    return (
        <>
            <ul className='w-[100%]'>
                <li className='list-none w-[100%] border-b-2 px-4 cursor-pointer flex justify-between items-baseline'
                style={{color:'var(--body_color)'}}
                >
                    <div style={{color:'var(--body_color)'}} className='flex items-baseline'>
                        <CheckCircleOutlined
                            onClick={() => toggleCompleted(task.id)}
                            className={` ${task.completed ? 'text-green-600' : 'text-inherit'}`} />
                        <span onClick={() => toggleCompleted(task.id)}
                            className={`ml-3 ${task.completed ? 'line-through' : ''}`}>
                            {task.task}
                        </span>
                    </div>
                    <DeleteOutlined className='px-2 h-[100%] text-inherit'
                        onClick={() => deleteTodo(task.id)}
                    />
                </li>
            </ul>
        </>
    )
}