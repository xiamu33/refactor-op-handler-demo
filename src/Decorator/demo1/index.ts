/*
 * @Author: xiamu
 * @Date: 2021-01-04 17:48:10
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-15 19:46:26
 * @FilePath: \test\src\Decorator\demo1\index.ts
 * @Description: 
 */

import Container from "typedi";
import { onConfigLoadEvent } from "../../events/eventHandler";
import './HelloWorldClass'

function helloWord(target: any) {
  console.log("hello world decorator");
}

function onEvent(target: any, key: string, ...arg: any[]) {
  console.log("args: ", target, ...arg);
  // TODO 需绑定单例，否则每次注册onEvent的方法上下文会不同。参考routing-controller手动实现，或者借用typedi
  const instance = Container.get(target.constructor.name);
  onConfigLoadEvent(target[key].bind(instance))
  console.log("name on event");
}

// @helloWord
export class HelloWorldClass {
  constructor() {
    console.log("hello world class");
  }

  static staticName = "static-name"

  container: string[] = [];

  myName = "name";
  public age = 25;

  @onEvent
  public getName() {
    this.container.push("1223" + Math.random())
    return this.printName();
  }

  private printName() {
    console.log("-------- in printName: ", this);
    return this.myName || HelloWorldClass.staticName;
  }

  @onEvent
  private setName() {
    this.myName = "set my name";
    console.log("-------- in setName: ", this);
    return this;
  }
}

declare module "./index" {
  interface HelloWorldClass {
    protoName: string;
  }
}

HelloWorldClass.prototype.myName = "changed-name";
HelloWorldClass.prototype.protoName = "proto-name";
