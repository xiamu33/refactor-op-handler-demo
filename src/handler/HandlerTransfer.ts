/*
 * @Author: xiamu
 * @Date: 2021-01-15 20:00:47
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-26 16:08:19
 * @FilePath: \test\src\handler\HandlerTransfer.ts
 * @Description: 
 */

import Container, { Service } from "typedi";
import { importClassesFromDirs } from "../utils";

export class HandlerTransfer {

  constructor() {
    registerHandlers();
    Container.set(DbHandler, new DbHandler())
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
  const files = require?.context(`./models`, true, /\.js/);
  if (files) {
    importAll(files);
    console.log('files: ', files, cache);
    if (cache.length) {
      cache.forEach(p => require(p));
    }
  } else {
    const handlers = importClassesFromDirs([`${__dirname}/models/**/*`]);
    console.log('---------- handlers: ', handlers);
  }
}
export const cache: string[] = [];
function importAll (r: any) {
  r.keys().forEach((p: any) => cache.push(r.resolve(p)));
}
export enum TransType {
  activity = "activity"
}

interface HandlerAction {
  type: TransType;
  action: string;
}

export default class DbHandler {
  public db = 'db'
}

export function GameService(systemId: TransType) {
  return Service({ id: systemId, multiple: true })
}
