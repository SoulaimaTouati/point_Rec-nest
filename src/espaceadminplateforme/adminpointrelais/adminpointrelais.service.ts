import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminPointrelais } from 'src/entities/adminpointrelais.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminpointrelaisService {
    constructor(
        @InjectRepository(AdminPointrelais)
        private adminPointRelaisRepository: Repository<AdminPointrelais>,
      ) {}
    
      async getAllAdminPointRelais(): Promise<AdminPointrelais[]> {
        return this.adminPointRelaisRepository.find();
      }
}
