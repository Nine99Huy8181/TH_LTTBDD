"use strict";
class Logger {
    constructor() { }
    ;
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }
    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}`;
        console.log(logMessage);
    }
}
const log1 = Logger.getInstance();
log1.log("Running...");
