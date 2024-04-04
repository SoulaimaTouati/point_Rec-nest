import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//adminplateforme correspond lil tableau fil base lazem ykoun le meme nom
@Entity({ name: 'adminplateforme' }) 
export class AdminPlateforme {
  @PrimaryGeneratedColumn({ name: 'idadminplateforme' })
  idadminplateforme: number;

  @Column({ name: 'nom', length: 100 })
  nom: string;

  @Column({ name: 'prenom', length: 100 })
  prenom: string;

  @Column({ name: 'numerotelephone' })
  numerotelephone: number;

  @Column({ name: 'motdepasse' })
  motdepasse: string; 
}
