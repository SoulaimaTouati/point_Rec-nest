import { Module } from '@nestjs/common';
import { AuthentificationController } from './authentification.controller';
import { AuthentificationService } from './authentification.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPlateforme } from 'src/entities/adminPlateforme.entity';
import { AdminPointrelais } from 'src/entities/adminpointrelais.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminPlateforme,AdminPointrelais]),AuthentificationModule,TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Seuulyy123@&',
    database: 'admin', // Nom de votre base de données
    entities: [AdminPlateforme,AdminPointrelais], // Liste des entités à utiliser
    synchronize: true, // Mettez à true pour synchroniser automatiquement le schéma avec la base de données
  })
  //AuthentificationModule, // Ajoutez votre module d'authentification ici
], 
  controllers: [AuthentificationController],
  providers: [AuthentificationService]
})
export class AuthentificationModule {
  
}
