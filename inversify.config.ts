import { Kernel } from "inversify";
import "reflect-metadata";

let kernel = new Kernel();

// bindings

import { IHeader, Header } from "./header";
kernel.bind("IHeader")
    .toConstantValue(Header);

import { IApp, App } from "./app";
kernel.bind("IApp")
    .toConstantValue(App);

// end bindings

export default kernel;
