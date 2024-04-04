import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminPointrelais } from 'src/entities/adminpointrelais.entity';
import { Pointrelais } from 'src/entities/pointrelais.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminpointrelaisService {
  constructor(
    @InjectRepository(AdminPointrelais)
    private adminPointRelaisRepository: Repository<AdminPointrelais>,
    @InjectRepository(Pointrelais) // Ajoutez cette ligne pour injecter le repository Pointrelais
    private pointRelaisRepository: Repository<Pointrelais>,
  ) {}

  async getAllAdminPointRelais(): Promise<AdminPointrelais[]> {
    return this.adminPointRelaisRepository.find();
  }

  async findPointsRelaisByAdminId(id: number): Promise<Pointrelais[]> {
    const adminPointRelais = await this.adminPointRelaisRepository.findOne({ where: { idadminpointrelais: id } });
    if (!adminPointRelais) {
      throw new Error(`Admin point relais with ID ${id} not found`);
    }
    return this.pointRelaisRepository.find({ where: { idadminpointrelais: adminPointRelais.idadminpointrelais } });
  }
}
