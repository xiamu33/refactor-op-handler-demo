/*
 * @Author: xiamu
 * @Date: 2021-01-15 18:01:44
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-15 18:02:02
 * @FilePath: \test\src\Decorator\demo1\HelloWorldClass.ts
 * @Description: 
 */

import { Service } from "typedi";

@Service('HelloWorldClass')
export class HelloWorldClass {
  constructor() {
    console.log("hello world class");
  }

  static staticName = "static-name"

  container: string[] = [];

  myName = "name";
  public age = 25;

  public getName() {
    this.container.push("1223" + Math.random())
    // console.log("getName executed: ", this.myName, this.age);
    return this.printName();
  }

  private printName() {
    // console.log("-------- this.container", this.container);
    console.log("-------- in printName: ", this);
    // console.log(this, this.myName, HelloWorldClass.staticName, this.protoName)
    return this.myName || HelloWorldClass.staticName;
  }

  private setName() {
    this.myName = "set my name";
    console.log("-------- in setName: ", this);
    return this;
  }
}
