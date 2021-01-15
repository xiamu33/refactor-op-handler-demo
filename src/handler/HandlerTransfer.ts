/*
 * @Author: xiamu
 * @Date: 2021-01-15 20:00:47
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-15 20:30:36
 * @FilePath: \test\src\handler\HandlerTransfer.ts
 * @Description: 
 */

import { ActivityHandler } from "./ActivityHandler";

export class HandlerTransfer {

  public execAction(data: HandlerAction) {
    const { type, action } = data;
    const HandlerClass: any = TransMap[type];
    if (typeof HandlerClass !== "function") throw new Error(`${type} handler not found`);
    const handle = new HandlerClass();
    if (typeof handle[action] !== "function") throw new Error(`${action} is not a action`);
    return handle[action](data);
  }

}

export enum TransType {
  activity = "activity"
}

class TransMap {
  static activity = ActivityHandler;
}

interface HandlerAction {
  type: TransType;
  action: string;
}
