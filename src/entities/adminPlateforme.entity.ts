import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'adminplateforme' }) // Assurez-vous que le nom correspond à votre table dans la base de données
export class AdminPlateforme {
  @PrimaryGeneratedColumn({ name: 'idadminplateforme' })
  idadminplateforme: number;

  @Column({ name: 'nom', length: 100 })
  nom: string;

  @Column({ name: 'prenom', length: 100 })
  prenom: string;

  @Column({ name: 'numerotelephone' })
  numerotelephone: string;

  @Column({ name: 'motdepasse' })
  motdepasse: string; // 
}
