class Logger{
    private static instance: Logger;
    private constructor(){};
    static getInstance(): Logger{
        if(!Logger.instance){
            Logger.instance = new Logger()
        }
        return Logger.instance;
    }

    log(message: string): void{
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}`;
        console.log(logMessage);
        
    }
}

const log1 = Logger.getInstance();
log1.log("Running...");