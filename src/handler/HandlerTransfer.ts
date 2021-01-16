/*
 * @Author: xiamu
 * @Date: 2021-01-15 20:00:47
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-16 18:12:54
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
    const handle = Container.get<any>(type);
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
