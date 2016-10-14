import * as React from "react";

export interface TextProps {
    text: string;
}

export interface TextState { }

export interface IText extends React.Component<TextProps, TextState> {

}

export class Text extends React.Component<TextProps, TextState> implements IText {

    public render(): React.ReactElement<{}> {
        return <span>{ this.props.text }</span>;
    }

}
