/*
 * @Author: xiamu
 * @Date: 2021-01-15 20:11:10
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-15 20:33:16
 * @FilePath: \test\src\handler\ActivityHandler.ts
 * @Description: 
 */

export class ActivityHandler {
  private sign: string = 'null';

  public actionA() {
    console.log('this is action A', this.sign);
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
