import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Patch, Post, Put, Query } from '@nestjs/common';
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

  @Post('creer')
  async create(@Body() createAdminPointRelaisDto: AdminPointrelais) {
    return this.adminPointRelaisService.create(createAdminPointRelaisDto);
  }

    @Patch(':idpointrelais/:idadminpointrelais') update(
    @Param('idpointrelais') idPointrelais: number,
    @Param('idadminpointrelais') idAdminPointrelais: number,
  ) {
    return this.adminPointRelaisService.updatePointrelais(idPointrelais, idAdminPointrelais);
  }

  @Put('update/:idPointrelais/:idAdminPointrelais')
  async updateAdminPointrelais(
    @Param('idPointrelais') idPointrelais: number,
    @Param('idAdminPointrelais') idAdminPointrelais: number,
  ): Promise<Pointrelais> {
    try {
      return await this.adminPointRelaisService.updateAdminPointrelais(idPointrelais, idAdminPointrelais);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Get('search/:q')
  findByQuery(@Query('q') query: string): Promise<AdminPointrelais[]> {
    return this.adminPointRelaisService.findByQuery(query);
  }

    
}

    
