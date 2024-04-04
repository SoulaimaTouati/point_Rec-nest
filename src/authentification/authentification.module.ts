import { Module } from '@nestjs/common';
import { AuthentificationController } from './authentification.controller';
import { AuthentificationService } from './authentification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPlateforme } from 'src/entities/adminPlateforme.entity';
import { AdminPointrelais } from 'src/entities/adminpointrelais.entity';
import { AgentPointrelais } from 'src/entities/agentpointrelais.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminPlateforme,AdminPointrelais,AgentPointrelais]),AuthentificationModule,TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3307,
    username: 'root',
    password: '',
    database: 'admin', 
    // Liste des entités à utiliser
    entities: [AdminPlateforme,AdminPointrelais,AgentPointrelais], 
    synchronize: true, 
    // true pour synchroniser automatiquement le schéma avec la base de données
  })
], 
  controllers: [AuthentificationController],
  providers: [AuthentificationService]
})
export class AuthentificationModule {
  
}
