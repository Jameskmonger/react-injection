import * as React from "react";
import { inject } from "./inversify.config";

import { IText } from "./text";

export interface HeaderProps {
    title: string;
}

export interface HeaderState { }

export interface IHeader extends React.Component<HeaderProps, HeaderState> {

}

export class Header extends React.Component<HeaderProps, HeaderState> implements IHeader {

    @inject("IText")
    private text: new () => IText;

    public render(): React.ReactElement<{}> {
        return <section>
            <h1>{ this.props.title }</h1>
            <this.text text="Example of Dependency Injection in React" />
        </section>;
    }

}
