import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ColisService } from './colis.service';
import { Colis } from 'src/entities/colis.entity';

@Controller('colis')
export class ColisController {
  constructor(private readonly colisService: ColisService) {}

  @Get(':numColis/adresse')
  async getAdresse(@Param('numColis') numColis: string): Promise<string> {
    const colis = await this.colisService.findByNumColis(numColis);
    return colis.adresse; 
  }
  @Get('coliss')
    async getAllAdminplateforme(): Promise<Colis[]> {
      return this.colisService.getAllColis();
    }
  
}