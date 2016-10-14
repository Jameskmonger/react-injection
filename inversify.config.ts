import { Kernel } from "inversify";
import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";

let kernel = new Kernel();
let decorators = getDecorators(kernel);
let inject = decorators.lazyInject;

// bindings

import { IApp, App } from "./app";
kernel.bind<new () => IApp>("IApp").toConstantValue(App);

import { IHeader, Header } from "./header";
kernel.bind<new () => IHeader>("IHeader").toConstantValue(Header);

// end bindings

export {
    kernel,
    inject
};
