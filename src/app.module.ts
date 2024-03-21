import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthentificationModule } from './authentification/authentification.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPlateforme } from './entities/adminPlateforme.entity';
import { AdminPointrelais } from './entities/adminpointrelais.entity';
import { AgentPointrelais } from './entities/agentpointrelais.entity';
@Module({
  imports: [AuthentificationModule,TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'admin', // Nom de votre base de données
    entities: [AdminPlateforme,AdminPointrelais,AgentPointrelais], // Liste des entités à utiliser
    synchronize: true, // Mettez à true pour synchroniser automatiquement le schéma avec la base de données
  })
  //AuthentificationModule, // Ajoutez votre module d'authentification ici
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
