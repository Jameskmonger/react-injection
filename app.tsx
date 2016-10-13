import * as React from "react";
import { inject } from "inversify";

import { IHeader } from "./header";

export interface AppProps { }

export interface AppState { }

export interface IApp extends React.Component<AppProps, AppState> {

}

export class App extends React.Component<AppProps, AppState> implements IApp {

    private header: new () => IHeader;

    constructor (
        @inject("IHeader") header: new () => IHeader
    ) {
        super();

        this.header = header;
    }

    public render(): React.ReactElement<{}> {
        return <section>
            <this.header title="hi there" />
        </section>;
    }

}
