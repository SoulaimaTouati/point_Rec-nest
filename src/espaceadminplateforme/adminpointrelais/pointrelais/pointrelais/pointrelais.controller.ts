import { Controller, Get } from '@nestjs/common';
import {  pointRelaisService } from './pointrelais.service';
import { Pointrelais } from 'src/entities/pointrelais.entity';

@Controller('pointrelais')
export class PointrelaisController {
    constructor(private pointRelaisService: pointRelaisService) {}

    @Get('list')
    async getAllPointRelais(): Promise<Pointrelais[]> {
      return this.pointRelaisService.getAllPointRelais();
    }


}
