/*
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { RequestMethod, ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  /*
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
  */
  /*
  app.setGlobalPrefix('api', {
    exclude: [
      { path: '/', method: RequestMethod.GET },
      { path: '/api', method: RequestMethod.GET }
    ]
  })
  */
//  await app.listen(process.env.PORT ?? 3000)
//}
//bootstrap()

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import express from 'express';
import { createServer, proxy } from 'aws-serverless-express';
import { Handler, Context, Callback } from 'aws-lambda';

const expressApp = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
  await app.init();
}

bootstrap();

const server = createServer(expressApp);

export const handler: Handler = (event: any, context: Context, callback: Callback) => {
  proxy(server, event, context);
};

