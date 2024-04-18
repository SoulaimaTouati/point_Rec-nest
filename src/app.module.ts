import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthentificationModule } from './authentification/authentification.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPlateforme } from './entities/adminPlateforme.entity';
import { AdminPointrelais } from './entities/adminpointrelais.entity';
import { AgentPointrelais } from './entities/agentpointrelais.entity';
import { Colis } from './entities/colis.entity';
import { ColisModule } from './colis/colis/colis.module';
import { AdminpointrelaisModule } from './espaceadminplateforme/adminpointrelais/adminpointrelais.module';
import { Pointrelais } from './entities/pointrelais.entity';
import { PointrelaisModule } from './espaceadminplateforme/adminpointrelais/pointrelais/pointrelais/pointrelais.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'admin', 
    // Liste des entités à utiliser
    entities: [AdminPlateforme,AdminPointrelais,AgentPointrelais,Colis,Pointrelais], 
    /// Mettez à true pour synchroniser automatiquement le schéma avec la base de données
    synchronize: true, 
  }), 
  AuthentificationModule,ColisModule,AdminpointrelaisModule,PointrelaisModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
