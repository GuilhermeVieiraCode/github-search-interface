import React from "react";
import App from "./App";
import GithubProvider from "./providers/github-provider";
import { Destyle } from "./styles/destyle";

export const Provider = () => {
    return(
        <main>
        <GithubProvider>
            <Destyle/>
            <App/>
        </GithubProvider>
        </main>
    )
}