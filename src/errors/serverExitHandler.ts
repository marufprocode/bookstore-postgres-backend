import { Server } from 'http';

export const serverExitHandler = (server: Server, err: any) => {
  console.error(err);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};
