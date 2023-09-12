import { Server } from 'http';
import app from './app';
import { port } from './config';



async function bootstrap() {

  const server: Server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
  });

  const exitHandler = () => {

    if (server) {
      server.close(() => {
        console.log('Server closed');
      });
    }
    process.exit(1);
  };

  const unexpectedErrorHandler = (error: unknown) => {
    console.error(error);
    exitHandler();
  };

  process.on('uncaughtException', unexpectedErrorHandler);
  process.on('unhandledRejection', unexpectedErrorHandler);

  process.on('SIGTERM', () => {
    console.log('SIGTERM received');
    if (server) {
      server.close();
    }
  });
}

bootstrap();