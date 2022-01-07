import React from "react";
import App from "./App";
import GithubProvider from "./providers/github-provider";
import { Destyle } from "./global/destyle";

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