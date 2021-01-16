import { Request, Response, NextFunction } from "express";
import "../Decorator/demo1";
import { emitConfigLoadEvent } from "../events/eventHandler";
import { HandlerTransfer } from "../handler/HandlerTransfer";

const handlerTransfer = new HandlerTransfer();

export function getHome(req: Request, res: Response, next: NextFunction) {
  const { type, action } = req.query;
  if (!type || !action) throw new Error('must provide param: type, action');
  const rspText = handlerTransfer.execAction(req.query) || 'home';
  emitConfigLoadEvent();
  res.send(rspText);
}
