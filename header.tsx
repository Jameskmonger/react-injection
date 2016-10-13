import * as React from "react";

export interface HeaderProps {
    title: string;
}

export interface HeaderState { }

export interface IHeader extends React.Component<HeaderProps, HeaderState> {

}

export class Header extends React.Component<HeaderProps, HeaderState> implements IHeader {

    public render(): React.ReactElement<{}> {
        return <h1>{ this.props.title }</h1>;
    }

}
