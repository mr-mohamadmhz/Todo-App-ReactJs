import { Col, Row } from "antd"

export default function FilterArryXs({ todos, deleteCompletedTodo, filterTodo, setFilterTodo }) {


    return (
        <>
            <Row className='px-2 mt-3  w-[100%] flex justify-between border-b-2 md:border-b-0'>
                <Col className='text-center' xs={10} md={6}><p>{todos?.filter(item => !item.completed)?.length} items left</p></Col>
                <Col xs={0} md={10}><Row className='justify-around'>
                    <Col className='text-center'><button
                        style={{ color: 'var(--body_color)' }}
                        onClick={() => setFilterTodo('All')}>All</button></Col>
                    <Col className='text-center'><button
                        style={{ color: 'var(--body_color)' }}
                        onClick={() => setFilterTodo('Active')}>Active</button></Col>
                    <Col className='text-center'><button
                        style={{ color: 'var(--body_color)' }}
                        onClick={() => setFilterTodo('Completed')}>Completed</button></Col>
                </Row></Col>
                <Col className='text-center' xs={14} md={8}>
                    <button onClick={deleteCompletedTodo}
                        style={{ color: 'var(--body_color)' }}
                    >Clear Completed</button>
                </Col>
            </Row>
        </>
    )
}