import { Controller, Get, Param } from '@nestjs/common';
import { AdminpointrelaisService } from './adminpointrelais.service';
import { AdminPointrelais } from 'src/entities/adminpointrelais.entity';
import { Pointrelais } from 'src/entities/pointrelais.entity';

@Controller('adminpointrelais')
export class AdminpointrelaisController {
    constructor(private adminPointRelaisService: AdminpointrelaisService) {}

  @Get()
  async getAllAdminPointRelais(): Promise<AdminPointrelais[]> {
    return this.adminPointRelaisService.getAllAdminPointRelais();
  }
  @Get(':id/pointsrelais')
  findPointsRelais(@Param('id') id: number): Promise<Pointrelais[]> {
    return this.adminPointRelaisService.findPointsRelaisByAdminId(id);
  }
}


