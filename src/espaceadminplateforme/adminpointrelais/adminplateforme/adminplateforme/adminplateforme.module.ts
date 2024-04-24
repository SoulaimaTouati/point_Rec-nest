import { Module } from '@nestjs/common';
import { AdminplateformeService } from './adminplateforme.service';
import { AdminplateformeController } from './adminplateforme.controller';
import { AdminPlateforme } from 'src/entities/adminPlateforme.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminPlateforme]), 
    AdminplateformeModule,
  ],
  providers: [AdminplateformeService],
  controllers: [AdminplateformeController]
})
export class AdminplateformeModule {}
