import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColisController } from './colis.controller';
import { ColisService } from './colis.service';
import { Colis } from 'src/entities/colis.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Colis]), // Import des entités pour le module
  ],
  controllers: [ColisController],
  providers: [ColisService],
})
export class ColisModule {}