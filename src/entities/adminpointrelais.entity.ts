import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pointrelais } from './pointrelais.entity';
//(adminpointrelais)correspond au nom du tableau fil base données
@Entity({ name: 'adminpointrelais' }) 
export class AdminPointrelais {
  @PrimaryGeneratedColumn({ name: 'idadminpointrelais' })
  idadminpointrelais: number;

  @Column({ name: 'nom', length: 100 })
  nom: string;

  @Column({ name: 'prenom', length: 100 })
  prenom: string;

  @Column({ name: 'numerotelephone' })
  numerotelephone: number;

  @Column({ name: 'motdepasse',length:255 })

  motdepasse: string; 

  @Column({name: 'num_pointrelais'})
  num_pointrelais:number;
/*
  @OneToMany(() => Pointrelais, (pointrelais) => pointrelais.adminPointrelais)
  pointsRelais: Pointrelais;
  */

}

