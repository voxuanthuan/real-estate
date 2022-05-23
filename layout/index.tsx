import React from "react";
import Head from "next/head";
import Footer from "./components/footer";
import Header from "./components/header";

interface IProps {
  children?: React.ReactNode;
  pageTitle?: string,
  description?: string
}

export default function Layout(props: IProps) {
  <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta property="og:title" content={props.pageTitle} key="ogtitle" />
       <meta property="og:description" content={props.description} key="ogdesc" />
    <title>Create Next App</title>
    <meta name="description" content="Hodace network real estate" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
