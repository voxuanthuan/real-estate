import React from 'react'
import Footer from './components/footer'
import Header from "./components/header"

interface IProps {
    children?: React.ReactNode
}

export default function Layout(props: IProps) {
    return <>
        <Header/>
        <main>{props.children}</main>
        <Footer/>
    </>
}