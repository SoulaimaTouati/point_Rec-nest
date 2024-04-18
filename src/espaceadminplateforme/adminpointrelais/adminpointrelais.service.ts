import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminPointrelais } from 'src/entities/adminpointrelais.entity';
import { Pointrelais } from 'src/entities/pointrelais.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminpointrelaisService {
  constructor(
    @InjectRepository(AdminPointrelais)
    private adminPointRelaisRepository: Repository<AdminPointrelais>,
    @InjectRepository(Pointrelais) // Ajoutez cette ligne pour injecter le repository Pointrelais
    private pointRelaisRepository: Repository<Pointrelais>,
  ) {}

  async getAllAdminPointRelais(): Promise<AdminPointrelais[]> {
    return this.adminPointRelaisRepository.find();
  }

  async findPointsRelaisByAdminId(id: number): Promise<Pointrelais[]> {
    const adminPointRelais = await this.adminPointRelaisRepository.findOne({ where: { idadminpointrelais: id } });
    if (!adminPointRelais) {
      throw new Error(`Admin point relais with ID ${id} not found`);
    }
    return this.pointRelaisRepository.find({ where: { idadminpointrelais: adminPointRelais.idadminpointrelais } });
  }

  async create(createAdminPointRelaisDto: AdminPointrelais): Promise<AdminPointrelais> {
    const adminPointRelais = new AdminPointrelais();
    adminPointRelais.nom = createAdminPointRelaisDto.nom;
    adminPointRelais.prenom = createAdminPointRelaisDto.prenom;
    adminPointRelais.numerotelephone = createAdminPointRelaisDto.numerotelephone;
    adminPointRelais.motdepasse = createAdminPointRelaisDto.motdepasse;
    // Assigner d'autres propriétés au besoin

    return this.adminPointRelaisRepository.save(adminPointRelais);
  }


  async getAllPointRelais(): Promise<Pointrelais[]> {
    return this.pointRelaisRepository.find();
  }

  async addAdminToPoinRelais(adminData: AdminPointrelais): Promise<AdminPointrelais> {
    const newAdmin = await this.adminPointRelaisRepository.save(adminData);
    const pointRelaisToUpdate = await this.pointRelaisRepository.findOne({where: {idadminpointrelais:adminData.idadminpointrelais} });
    pointRelaisToUpdate.idadminpointrelais = newAdmin.idadminpointrelais;
    await this.pointRelaisRepository.save(pointRelaisToUpdate);
    return newAdmin;
  }
  async updatePointrelais(
    id: number,
    idadmin: number,
  ): Promise<Pointrelais> {
    const pointrelais = await this.pointRelaisRepository.findOne({
      where: { id_pointrelais: id } },);

    if (!pointrelais) {
      throw new NotFoundException('Point relais not found for the given admin point relais ID');
    }
    pointrelais.idadminpointrelais =idadmin;
    return this.pointRelaisRepository.save(pointrelais);
  }

  async updateAdminPointrelais(idPointrelais: number, idAdminPointrelais: number): Promise<Pointrelais> {
    const pointrelais = await this.pointRelaisRepository.findOne({where:{id_pointrelais:idPointrelais}});
    if (!pointrelais) {
      // Gérer le cas où le point relais n'est pas trouvé
      // Par exemple, lever une exception ou renvoyer un message d'erreur
      throw new Error('Point relais non trouvé');
    }
    pointrelais.idadminpointrelais = idAdminPointrelais;
    return this.pointRelaisRepository.save(pointrelais);
  }

    async findByQuery(query: string): Promise<AdminPointrelais[]> {
      return this.adminPointRelaisRepository.createQueryBuilder('admin')
        .where('admin.nom LIKE :query OR admin.prenom LIKE :query', { query: `%${query}%` })
        .getMany()  ;
        
        
    }
  }

