import { Request, Response, NextFunction } from "express";
import Container from "typedi";
import { UserRepository } from "../Decorator/custom-decorators/UserRepository";
import "../Decorator/demo1";
import { emitConfigLoadEvent } from "../events/eventHandler";
import { HandlerTransfer } from "../handler/HandlerTransfer";

console.log(Container.get(UserRepository));

const handlerTransfer = new HandlerTransfer();

export function getHome(req: Request, res: Response, next: NextFunction) {
  const { type, action } = req.query;
  const rspText = handlerTransfer.execAction({ type, action }) || 'home';
  // const hw = new HelloWorldClass();
  emitConfigLoadEvent();
  // Container.get(UserRepository).save({firstName: 'first-name', secondName: 'second-name'})
  res.send(rspText);
}
