import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminPlateforme } from '../entities/adminPlateforme.entity';
import { AdminPointrelais } from '../entities/adminpointrelais.entity'; // Assurez-vous du chemin correct

@Injectable()
export class AuthentificationService {
  constructor(
    @InjectRepository(AdminPlateforme)
    private readonly adminPlateformeRepository: Repository<AdminPlateforme>,
    @InjectRepository(AdminPointrelais)
    private readonly adminPointrelaisRepository: Repository<AdminPointrelais>,
  ) {}

  async testDatabaseConnection(): Promise<string> {
    try {
      await this.adminPlateformeRepository.query('SELECT 1');
      await this.adminPointrelaisRepository.query('SELECT 1');
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
