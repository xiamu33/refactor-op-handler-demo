/*
 * @Author: xiamu
 * @Date: 2021-01-16 18:17:34
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-16 18:21:47
 * @FilePath: /refactor-op-handler-demo/src/handler/models/LoginHandler.ts
 * @Description: 
 */

import { Service } from "typedi";

@Service('login')
export class LoginHandler {
  private userToken: { [user: string]: string; } = {};

  public login(data: { user: string; token: string; }) {
    const { user, token } = data;
    this.userToken[user] = token;
    console.log(`${user} login`);
    return token;
  }

  public logout(data: {user: string;}) {
    const {user} = data;
    delete this.userToken[user];
    console.log(`${user} logout`);
    return 'bye';
  }

}
