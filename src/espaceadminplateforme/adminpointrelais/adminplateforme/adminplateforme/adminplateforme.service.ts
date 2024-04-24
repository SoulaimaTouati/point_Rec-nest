import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminPlateforme } from 'src/entities/adminPlateforme.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminplateformeService {
    constructor(
        @InjectRepository(AdminPlateforme)
        private adminPlateformeRepository: Repository<AdminPlateforme>,){}

        async getAllAdminPlateforme(): Promise<AdminPlateforme[]> {
            return this.adminPlateformeRepository.find();
          }

          async create(createAdminPlateformeDto: AdminPlateforme): Promise<AdminPlateforme> {
            const adminPlateforme = new AdminPlateforme();
            adminPlateforme.nom = createAdminPlateformeDto.nom;
            adminPlateforme.prenom = createAdminPlateformeDto.prenom;
            adminPlateforme.numerotelephone = createAdminPlateformeDto.numerotelephone;
            adminPlateforme.motdepasse = createAdminPlateformeDto.motdepasse;
            adminPlateforme.email = createAdminPlateformeDto.email; 
        
            return this.adminPlateformeRepository.save(adminPlateforme);
          }
}
