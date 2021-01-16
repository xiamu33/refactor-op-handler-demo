import { Request, Response, NextFunction } from "express";
import "../Decorator/demo1";
import { emitConfigLoadEvent } from "../events/eventHandler";
import { HandlerTransfer } from "../handler/HandlerTransfer";

const handlerTransfer = new HandlerTransfer();

export function getHome(req: Request, res: Response, next: NextFunction) {
  const { type, action } = req.query;
  const rspText = handlerTransfer.execAction({ type, action }) || 'home';
  emitConfigLoadEvent();
  res.send(rspText);
}
