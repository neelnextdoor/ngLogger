class Logger {
    constructor(implementation) {
      this.implementation = implementation;
    }
  
    info(message) {
      const formattedMessage = `[${new Date().toLocaleString()}] ${message}`;
      this.implementation.info(formattedMessage);
    }

    error(message,trace) {
        const formattedMessage = `[${new Date().toLocaleString()}] ${message}`;
        this.implementation.error(formattedMessage,trace);
      }
  }
  
  export default Logger;
  