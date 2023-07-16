import image from '../../assets/images/bg-desktop-light.jpg'
import { useEffect, useState } from 'react'
import { Col, Row } from "antd"
import FilterArryMd from "./FilterArrymd"
import FilterArryXs from "./FilterArryXs"
import Todo from "./Todo"
import InputTodoApp from "./InputTodoApp"
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export default function FormTodo() {

    const [todos, setTodos] = useState([])
    const [filterTodo, setFilterTodo] = useState('All')

    const addTodos = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

    console.log({ todos })
    const toggleCompleted = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed
        } : todo))
    }
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const deleteCompletedTodo = () => {
        setTodos(todos.filter(todo => !todo.completed))
    }

    console.log(filterTodo)

    return (
        <>
            <div className="w-[100%] h-[18rem]">
                <div style={{ backgroundImage: `url(${image})` }} className="w-[100%] h-[100%] bg-no-repeat bg-cover flex items-center justify-center">
                    <Col xs={16} sm={12} md={14} lg={12} xl={10} className='justify-center  relative'>
                        <Row className="items-center justify-between ">
                            <Col><h1 className='font-bold text-[45px] text-white'>T O D O</h1></Col>
                            <Col><button>
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fill-rule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" /></svg>
                            </button></Col>
                        </Row>
                        <Row>
                            <InputTodoApp addTodos={addTodos} />
                        </Row>
                        <Col className='w-[100%] mt-6 bg-white absolute justify-between shadow rounded-[5px]'>
                            <Row xs={24}>
                                {todos?.filter(todo => {
                                    if (filterTodo === 'All') {
                                        return todo
                                    } else if (filterTodo === 'Completed') {
                                        return todo.completed
                                    } else if (filterTodo === 'Active') {
                                        return !todo.completed
                                    }
                                })?.map((todo, index) => {
                                    return <Todo task={todo} key={index}
                                        toggleCompleted={toggleCompleted}
                                        deleteTodo={deleteTodo}
                                    />
                                })}
                            </Row>
                            <FilterArryXs
                                todos={todos}
                                deleteCompletedTodo={deleteCompletedTodo}
                                setFilterTodo={setFilterTodo}
                                filterTodo={filterTodo}
                            />

                            <FilterArryMd
                                setFilterTodo={setFilterTodo}
                                filterTodo={filterTodo}
                            />
                        </Col>
                    </Col>
                </div>
            </div>
        </>
    )
}