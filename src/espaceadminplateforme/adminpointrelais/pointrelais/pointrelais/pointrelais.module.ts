import { Module } from '@nestjs/common';
import { pointRelaisService } from './pointrelais.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pointrelais } from 'src/entities/pointrelais.entity';
import { PointrelaisController } from './pointrelais.controller';

@Module({ imports: [
  TypeOrmModule.forFeature([Pointrelais]), 
],
controllers: [PointrelaisController],
providers: [pointRelaisService],
})

export class PointrelaisModule {}
