  import { Body, Controller, Get, Post } from '@nestjs/common';
  import { AuthentificationService } from './authentification.service';
  import { AdminPlateforme } from 'src/entities/adminPlateforme.entity';
import { AdminPointrelais } from 'src/entities/adminpointrelais.entity';

  @Controller('authentification')
  export class AuthentificationController {
    constructor(private readonly authentificationService: AuthentificationService) {}

    @Get()
    getHello(): string {
      return this.authentificationService.gethello();
    }

    @Post('login')
  async login(@Body() loginData: any) {
    const { username, password, role } = loginData;
    try {
      const result = await this.authentificationService.login(username, password, role);
      return result; // Si l'authentification réussit, retournez les informations appropriées
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

    @Get('test-db-connection')
    async testDBConnection(): Promise<string> {
      return this.authentificationService.testDatabaseConnection();
    }
    
    @Get('adminplateforme')
    async getAllAdminplateforme(): Promise<AdminPlateforme[]> {
      return this.authentificationService.getAllAdminPlateforme();
    }
    @Get('adminpointrelais')
    async getAllAdminpointrelais(): Promise<AdminPointrelais[]>{
      return this.authentificationService.getAllAdminPointrelais();
    }

    
  }