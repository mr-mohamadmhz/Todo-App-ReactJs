import { Col, Row } from "antd"

export default function FilterArryMd({ filterTodo, setFilterTodo }) {
    return (
        <>
            <Row md={0} className='px-2 mt-3  w-[100%] flex justify-between'>
                <Col xs={24} md={0}><Row className='justify-around'>
                    <Col className='text-center'><button onClick={() => setFilterTodo('All')}>All</button></Col>
                    <Col className='text-center'><button onClick={() => setFilterTodo('Active')}>Active</button></Col>
                    <Col className='text-center'><button onClick={() => setFilterTodo('Completed')}>Completed</button></Col>
                </Row></Col>
            </Row>
        </>
    )
}