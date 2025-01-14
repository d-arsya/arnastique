import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { RequestMethod, ValidationPipe } from '@nestjs/common'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

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
  /*
  app.setGlobalPrefix('api', {
    exclude: [
      { path: '/', method: RequestMethod.GET },
      { path: '/api', method: RequestMethod.GET }
    ]
  })
  */
  await app.listen(process.env.PORT ?? 3030)
}
bootstrap()
