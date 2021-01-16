/*
 * @Author: xiamu
 * @Date: 2021-01-15 20:11:10
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-16 18:54:03
 * @FilePath: /refactor-op-handler-demo/src/handler/models/OtherActivityHandler.ts
 * @Description: 
 */

import { Service } from "typedi";

@Service('activity')
export class OtherActivityHandler {
  private sign: string = 'null';

  public actionD() {
    console.log('this is action D', this.sign);
    return this.sign = 'D';
  }

  public actionE() {
    console.log('this is action E', this.sign);
    return this.sign = 'E';
  }

}
