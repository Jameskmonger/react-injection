import * as React from "react";
import { inject } from "./inversify.config";

import { IHeader } from "./header";

export interface AppProps { }

export interface AppState { }

export interface IApp extends React.Component<AppProps, AppState> {

}

export class App extends React.Component<AppProps, AppState> implements IApp {

    @inject("IHeader")
    private header: new () => IHeader;

    public render(): React.ReactElement<{}> {
        return <section>
            <this.header title="hi there" />
        </section>;
    }

}
