/*
 * @Author: xiamu
 * @Date: 2021-01-05 10:36:35
 * @LastEditors: xiamu
 * @LastEditTime: 2021-01-05 10:38:34
 * @FilePath: \test\src\events\eventHandler.ts
 * @Description: 
 */

import EventEmitter = require("events");

const emitter = new EventEmitter();

const configLoaderSymbol = Symbol("loader/config");

/** 触发加载配置事件 */
export function emitConfigLoadEvent(...arg: any[]) {
    emitter.emit(configLoaderSymbol, ...arg);
}

/** 监听加载配置事件（仅一次） */
export function onceConfigLoadEvent(listener: (...args: any[]) => void) {
    emitter.once(configLoaderSymbol, listener);
}

export function onConfigLoadEvent(listener: (...args: any[]) => void) {
    emitter.on(configLoaderSymbol, listener);
}
