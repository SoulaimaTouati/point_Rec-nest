import { Injectable,Logger,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminPlateforme } from '../entities/adminPlateforme.entity';
import { AdminPointrelais } from '../entities/adminpointrelais.entity'; 
import { AgentPointrelais } from 'src/entities/agentpointrelais.entity';

@Injectable()
export class AuthentificationService {
  private readonly logger = new Logger(AuthentificationService.name);

  constructor(
    @InjectRepository(AdminPlateforme)
    private readonly adminPlateformeRepository: Repository<AdminPlateforme>,
    @InjectRepository(AdminPointrelais)
    private readonly adminPointrelaisRepository: Repository<AdminPointrelais>,
    @InjectRepository(AgentPointrelais)
    private readonly agentpointrelaisRepository: Repository<AgentPointrelais>,

  ) {}

  async login(username: string, password: string, role: string) {
    this.logger.log(`Demande de connexion reçue pour le nom d'utilisateur: ${username}, role: ${role}`);

    let user = null;
    switch (role) {
      case 'admin_platform':
        user = await this.adminPlateformeRepository.findOne({ where: {nom: username, motdepasse: password }});
        break;
      case 'admin_agent':
        user = await this.adminPointrelaisRepository.findOne({ where: {nom: username, motdepasse: password }});
        break;
      case 'agent_point_relais':
        user = await this.agentpointrelaisRepository.findOne({ where: {nom: username, motdepasse: password }});
        break;
      default:
        this.logger.error(`Rôle non pris en charge reçu: ${role}`);
        throw new NotFoundException('Rôle non pris en charge');
    }

    if (!user) {
      throw new NotFoundException('vérifier vos données');
    }

    this.logger.log(`L'utilisateur s'est connecté avec succès avec le rôle : ${role}`);
    return { success: true, role };
  }




  async testDatabaseConnection(): Promise<string> {
    try {
      await this.adminPlateformeRepository.query('SELECT 1');
      await this.adminPointrelaisRepository.query('SELECT 1');
      await this.agentpointrelaisRepository.query('SELECT 1');
      return 'connection a la base données avec succées';
    } catch (error) {
      console.error('erreur lors du connexion a la base données:', error);
      throw new Error('La connexion à la base de données a échoué');
    }
  }

  async getAllAdminPlateforme(): Promise<AdminPlateforme[]> {
    try {
      return await this.adminPlateformeRepository.find();
    } catch (error) {
      console.error('Erreur lors de la récupération des admins ', error);
      throw new Error('Échec de la récupération des admins');
    }
  }

  async getAllAdminPointrelais(): Promise<AdminPointrelais[]> {
    try {
      return await this.adminPointrelaisRepository.find();
    } catch (error) {
      console.error('Erreur lors de la récupération des admins', error);
      throw new Error('Échec de la récupération des admins');
    }
  }

  

  gethello(): string {
    return 'Hello world';
  }
}
