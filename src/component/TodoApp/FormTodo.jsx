import bgDesktopLight from '../../assets/images/bg-desktop-light.jpg'
import bgDesktopDark from '../../assets/images/bg-desktop-dark.jpg'
import { useEffect, useState } from 'react'
import { Col, Row } from "antd"
import DarkMode from '../DarkMode/DarkMode'
import FilterArryMd from "./FilterArrymd"
import FilterArryXs from "./FilterArryXs"
import Todo from "./Todo"
import InputTodoApp from "./InputTodoApp"
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export default function FormTodo() {

    const [todos, setTodos] = useState([])
    const [filterTodo, setFilterTodo] = useState('All')
    const [theme, setTheme] = useState(localStorage.getItem('selectedTheme'))
    const addTodos = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos)
    }

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

    const selectedTheme = localStorage.getItem("selectedTheme")

    console.log(selectedTheme)

    return (
        <>
            <div className="w-[100%] h-[18rem]">
                <div style={{ backgroundImage: `url(${selectedTheme == 'dark' ? bgDesktopDark : bgDesktopLight})` }}
                    className="w[100%] h-[100%] bg-no-repeat bg-cover flex items-center justify-center">
                    <Col xs={16} sm={12} md={14} lg={12} xl={10} className='justify-center  relative'>
                        <Row className="items-center justify-between ">
                            <Col><h1 className='font-bold text-[45px] text-white'>T O D O</h1></Col>
                            <Col>
                                <DarkMode theme={theme} setTheme={setTheme} />
                            </Col>
                        </Row>
                        <Row>
                            <InputTodoApp addTodos={addTodos} />
                        </Row>
                        <Col style={{ background: 'var(--body_background)' }}
                            className='w-[100%] mt-6 absolute justify-between shadow rounded-[5px]'>
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