import React from "react"
import Layout from "antd/es/layout/layout"
import HeaderTodoApp from "../HeaderTodoApp/HeaderTodoApp"
import ContentTodoApp from "../ContentTodoApp/ContentTodoApp"
import FooterTodoApp from "../FooterTodoApp/FooterTodoApp"
import { Header, Footer, Content } from "antd/es/layout/layout"

export default function Layouts() {

    return (
        <>
            <Layout>
                <Header className="h-auto p-0"><HeaderTodoApp /></Header>
                <Content className="h-auto p-0"><ContentTodoApp /></Content>
                <Footer className="h-auto p-0 "><FooterTodoApp /></Footer>
            </Layout>
        </>
    )
}