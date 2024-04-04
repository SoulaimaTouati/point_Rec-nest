import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Colis } from 'src/entities/colis.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ColisService {
  private readonly logger = new Logger(ColisService.name);

  constructor(
    @InjectRepository(Colis)
    private readonly colisRepository: Repository<Colis>,
  ) {}

  async findByNumColis(numColis: string): Promise<Colis> {
    return await this.colisRepository.findOne({ where: { num_Colis: numColis } }); 
  }


  async getAllColis(): Promise<Colis[]> {
    try {
      return await this.colisRepository.find();
    } catch (error) {
      console.error('Erreur lors de la récupération des colis', error);
      throw new Error('Échec de la récupération des colis');
    }
  }
  }