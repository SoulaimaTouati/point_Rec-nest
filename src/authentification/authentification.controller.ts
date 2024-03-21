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
      return { success: false, message: error.message }; // Gérer les erreurs d'authentification
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






  /*import { Controller, Post, Body, Get } from '@nestjs/common';
  import { AuthentificationService } from './authentification.service';

  //localhost:3000/authentification
  @Controller('authentification')
  export class AuthentificationController {
    constructor(private readonly authentificationService: AuthentificationService) {}
    @Get()
    gethello():String {
      return this.authentificationService.gethello();
  }
    @Get()
    findAll():any[]{
      return this.authentificationService.findAll();
    }


    @Post('register')
    register(@Body() userData: any) {
      return this.authentificationService.register(userData);
    }

    @Post('login')
    login(@Body() userData: any) {
      return this.authentificationService.login(userData);
    }
  }
  */
