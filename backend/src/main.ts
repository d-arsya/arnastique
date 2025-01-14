import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { RequestMethod, ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { Server } from 'http'

let server: Server
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
    .setTitle('Arnastique Backend API')
    .setDescription('Arnastique Backend API description')
    .setVersion('1.0')
    .addBearerAuth()
    // .addTag('Arnastique')
    .build()
  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, documentFactory, {
    swaggerOptions: { defaultModelsExpandDepth: -1 }
  })
  app.setGlobalPrefix('api')
  // await app.listen(process.env.PORT ?? 3000)
  await app.init()
  server = app.getHttpServer()
}
bootstrap()

export default async function handler(req, res) {
  if (!server) {
    await bootstrap()
  }
  server.emit('request', req, res)
}

// import { NestFactory } from '@nestjs/core';
// import { ExpressAdapter } from '@nestjs/platform-express';
// import { AppModule } from './app.module';
// import express from 'express';
// import { RequestMethod, ValidationPipe } from '@nestjs/common'
// import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
// const server = express();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
//   app.useGlobalPipes(new ValidationPipe())
//   const config = new DocumentBuilder()
//     .setTitle('Arnastique Backend API')
//     .setDescription('Arnastique Backend API description')
//     .setVersion('1.0')
//     .addBearerAuth()
//     .build()
//   const documentFactory = () => SwaggerModule.createDocument(app, config)
//   SwaggerModule.setup('api/docs', app, documentFactory, {
//     swaggerOptions: { defaultModelsExpandDepth: -1 }
//   })
//   app.setGlobalPrefix('api', {
//     exclude: [
//       { path: '/', method: RequestMethod.GET },
//       { path: '/api', method: RequestMethod.GET }
//     ]
//   })
//   await app.init();
// }

// bootstrap();

// export default server;
