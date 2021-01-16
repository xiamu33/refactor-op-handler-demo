/*
 * @Author: xiamu
 * @Date: 2021-01-15 20:00:47
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-16 20:31:10
 * @FilePath: /refactor-op-handler-demo/src/handler/HandlerTransfer.ts
 * @Description: 
 */

import Container from "typedi";
import { importClassesFromDirs } from "../utils";

export class HandlerTransfer {

  constructor() {
    registerHandlers();
  }

  public execAction(data: HandlerAction) {
    const { type, action } = data;
    const handlers = Container.getMany<any>(type);
    const handle = handlers.find(handler => handler[action]);
    if (typeof handle[action] !== "function") throw new Error(`${action} is not a action`);
    return handle[action](data);
  }

}

function registerHandlers() {
  const handlers = importClassesFromDirs([`${__dirname}/models/**/*`]);
  console.log('handlers: ', handlers);
}

export enum TransType {
  activity = "activity"
}

interface HandlerAction {
  type: TransType;
  action: string;
}
