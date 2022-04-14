const logger = require("./logger");

// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log("This is an informational message");

/*
También pueder instanciar uno nuevo de esta manera:*/
const customLogger = new logger.constructor('CUSTOM')
customLogger.log("Nuevo log 11");
customLogger.log("Nuevo log 12");
customLogger.log("Nuevo log 13");
customLogger.log("Nuevo log 14");
customLogger.log("Nuevo log 15");
customLogger.log("Nuevo log 16");
customLogger.counter();



