import { Request, Response, NextFunction } from "express";
import Container from "typedi";
import { UserRepository } from "../Decorator/custom-decorators/UserRepository";
import "../Decorator/demo1";
import { emitConfigLoadEvent } from "../events/eventHandler";

console.log(Container.get(UserRepository));

export function getHome(req: Request, res: Response, next: NextFunction) {
  // const hw = new HelloWorldClass();
  emitConfigLoadEvent()
  Container.get(UserRepository).save({firstName: 'first-name', secondName: 'second-name'})
  res.send('home')
}
