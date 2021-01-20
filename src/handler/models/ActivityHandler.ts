/*
 * @Author: xiamu
 * @Date: 2021-01-15 20:11:10
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-20 15:45:39
 * @FilePath: \test\src\handler\models\ActivityHandler.ts
 * @Description: 
 */

import DbHandler, { GameService, TransType } from "../HandlerTransfer";

@GameService(TransType.activity)
export class ActivityHandler {
  private sign: string = 'null';

  constructor(
    private _db: DbHandler
  ) { }

  public actionA() {
    console.log('this is action A', this.sign);
    console.log(this._db);
    return this.sign = 'A';
  }

  public actionB() {
    console.log('this is action B', this.sign);
    return this.sign = 'B';
  }

  public actionC() {
    console.log('this is action C', this.sign);
    return this.sign = 'C';
  }

}
