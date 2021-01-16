/*
 * @Author: xiamu
 * @Date: 2021-01-15 20:11:10
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-16 20:30:43
 * @FilePath: /refactor-op-handler-demo/src/handler/models/OtherActivityHandler.ts
 * @Description: 
 */

import { Service } from "typedi";

/**
 * 这里的`OtherActivityHandler`类与`ActivityHandler`使用了相同的Service id
 * 单纯设置`@Service('activity')`只能在容器中注册一个实例，导致无法获取其他实例
 * 方案1：`multiple: true`允许同个Service id下注册多个实例对应不同的类，在需注册重复Service id的类中启用
 * 方案2：保持`ActivityHandler`中的`@Service('activity')`设置，将`OtherActivityHandler`中的方法挂载到`ActivityHandler`的原型上（可自行用装饰器实现）
 */
@Service({ id: 'activity', multiple: true })
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
