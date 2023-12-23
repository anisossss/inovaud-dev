import "../styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";
import { SSRProvider } from "@react-aria/ssr";
import React from "react";
import App from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import ".././styles/tailwind.css";
import Cursor from "../components/cursor/Cursor";
import { useState } from "react";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      isDesktop: true,
    };
  }
  componentDidMount() {
    let comment = document.createComment(`
`);
    document.insertBefore(comment, document.documentElement);
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    const { isDesktop } = this.state;
    const myDarkTheme = createTheme({
      type: "dark",
      theme: {
        colors: {
          background: "#1d1d1d",
          text: "#fff",
          myDarkColor: "#ff4ecd",
        },
        space: {},
        fonts: {},
      },
    });
    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <NextUIProvider theme={myDarkTheme}>
        <GoogleAnalytics />
        <SSRProvider>
          <Layout>
            <Cursor isDesktop={isDesktop} />
            <Component {...pageProps} />
          </Layout>
        </SSRProvider>
      </NextUIProvider>
    );
  }
}
