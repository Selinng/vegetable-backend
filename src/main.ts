import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('vegetable'); // 全局路由前缀

  const options = new DocumentBuilder()
    .setTitle('variety')
    .setDescription('The variety API description')
    .setVersion('1.0')
    .addTag('variety')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
