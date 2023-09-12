"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverExitHandler = void 0;
const serverExitHandler = (server, err) => {
    console.error(err);
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    }
    else {
        process.exit(1);
    }
};
exports.serverExitHandler = serverExitHandler;
