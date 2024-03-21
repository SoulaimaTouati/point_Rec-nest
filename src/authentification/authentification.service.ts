import { Injectable,Logger,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminPlateforme } from '../entities/adminPlateforme.entity';
import { AdminPointrelais } from '../entities/adminpointrelais.entity'; // Assurez-vous du chemin correct
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
    this.logger.log(`Received login request for username: ${username}, role: ${role}`);

    let user = null;
    switch (role) {
      case 'admin_platform':
        user = await this.adminPlateformeRepository.findOne({ where: { nom: username, motdepasse: password } });
        break;
      case 'admin_agent':
        user = await this.adminPointrelaisRepository.findOne({ where: { nom: username, motdepasse: password } });
        break;
      case 'agent_point_relais':
        user = await this.agentpointrelaisRepository.findOne({ where: { nom: username, motdepasse: password } });
        break;
      default:
        this.logger.error(`Unsupported role received: ${role}`);
        throw new NotFoundException('Rôle non pris en charge');
    }

    if (!user) {
      throw new NotFoundException('vérifier vos données');
    }

    this.logger.log(`User logged in successfully with role: ${role}`);
    return { success: true, role };
  }




  async testDatabaseConnection(): Promise<string> {
    try {
      await this.adminPlateformeRepository.query('SELECT 1');
      await this.adminPointrelaisRepository.query('SELECT 1');
      await this.agentpointrelaisRepository.query('SELECT 1');
      return 'Database connection successful';
    } catch (error) {
      console.error('Error connecting to database:', error);
      throw new Error('Database connection failed');
    }
  }

  async getAllAdminPlateforme(): Promise<AdminPlateforme[]> {
    try {
      return await this.adminPlateformeRepository.find();
    } catch (error) {
      console.error('Error fetching admin users:', error);
      throw new Error('Failed to fetch admin users');
    }
  }

  async getAllAdminPointrelais(): Promise<AdminPointrelais[]> {
    try {
      return await this.adminPointrelaisRepository.find();
    } catch (error) {
      console.error('Error fetching admin users:', error);
      throw new Error('Failed to fetch admin users');
    }
  }

  gethello(): string {
    return 'Hello world';
  }
}
