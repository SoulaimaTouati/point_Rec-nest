import { Controller, Get } from '@nestjs/common';
import { PointrelaisService } from './pointrelais.service';
import { Pointrelais } from 'src/entities/pointrelais.entity';

@Controller('pointrelais')
export class PointrelaisController {
    constructor(private pointRelaisService: PointrelaisService) {}

    @Get()
    async getAllAdminPointRelais(): Promise<Pointrelais[]> {
      return this.pointRelaisService.getAllPointRelais();
    }
}
