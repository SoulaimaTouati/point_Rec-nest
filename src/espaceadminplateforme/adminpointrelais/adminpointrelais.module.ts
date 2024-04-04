import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPointrelais } from 'src/entities/adminpointrelais.entity';
import { AdminpointrelaisController } from './adminpointrelais.controller';
import { AdminpointrelaisService } from './adminpointrelais.service';
import { Pointrelais } from 'src/entities/pointrelais.entity';
import { PointrelaisModule } from './pointrelais/pointrelais/pointrelais.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([AdminPointrelais,Pointrelais]), 
        PointrelaisModule,
      ],
      controllers: [AdminpointrelaisController],
      providers: [AdminpointrelaisService],
})
export class AdminpointrelaisModule {}
