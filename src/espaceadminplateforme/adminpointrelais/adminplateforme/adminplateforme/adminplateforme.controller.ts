import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdminPlateforme } from 'src/entities/adminPlateforme.entity';
import { AdminplateformeService } from './adminplateforme.service';

@Controller('adminplateforme')
export class AdminplateformeController {
    constructor(private adminPlateformeservice: AdminplateformeService) {}

    @Get()
  async getAllAdminPlateforme(): Promise<AdminPlateforme[]> {
    return this.adminPlateformeservice.getAllAdminPlateforme();
  }
  @Post('creer')
  async create(@Body() createAdminPlateformesDto: AdminPlateforme) {
    return this.adminPlateformeservice.create(createAdminPlateformesDto);
  }

}
