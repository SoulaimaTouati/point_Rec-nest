import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPointrelais } from 'src/entities/adminpointrelais.entity';
import { AdminpointrelaisController } from './adminpointrelais.controller';
import { AdminpointrelaisService } from './adminpointrelais.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([AdminPointrelais]), 
      ],
      controllers: [AdminpointrelaisController],
      providers: [AdminpointrelaisService],
})
export class AdminpointrelaisModule {}
