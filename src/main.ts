import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', // Autorise les requêtes uniquement depuis cette origine
    methods: 'GET,PUT,POST,DELETE', // Méthodes HTTP autorisées
    allowedHeaders: 'Content-Type, Authorization', // En-têtes autorisés
  });

  await app.listen(3000);
}
bootstrap();
