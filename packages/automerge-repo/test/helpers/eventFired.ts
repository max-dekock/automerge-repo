import EventEmitter from "eventemitter3"

export const eventFired = (emitter: EventEmitter, event: string) =>
  new Promise<any>(resolve => emitter.once(event, d => resolve(d)))