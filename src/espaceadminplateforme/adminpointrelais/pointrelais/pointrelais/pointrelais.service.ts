import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pointrelais } from 'src/entities/pointrelais.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PointrelaisService {

    constructor(
        @InjectRepository(Pointrelais)
        private pointRelaisRepository: Repository<Pointrelais>,
      ) {}
    
      async getAllPointRelais(): Promise<Pointrelais[]> {
        return this.pointRelaisRepository.find();
      }


}
