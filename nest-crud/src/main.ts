import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from './app.module';

async function bootstrap(){
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Tasks API')
    .setDescription('API para gestionar tareas')
    .setVersion('1.0')
    .build();
 
  SwaggerModule.setup('api', app, SwaggerModule.createDocument(app, config));

  app.enableCors();
  await app.listen(3000);

}
bootstrap();