import { Controller, Get } from '@nestjs/common';
import { AdminpointrelaisService } from './adminpointrelais.service';
import { AdminPointrelais } from 'src/entities/adminpointrelais.entity';

@Controller('adminpointrelais')
export class AdminpointrelaisController {
    constructor(private adminPointRelaisService: AdminpointrelaisService) {}

  @Get()
  async getAllAdminPointRelais(): Promise<AdminPointrelais[]> {
    return this.adminPointRelaisService.getAllAdminPointRelais();
  }
}
