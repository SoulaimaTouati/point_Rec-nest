import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { AdminPointrelais } from './adminpointrelais.entity';

@Entity({ name: 'pointrelais' }) 
export class Pointrelais {
  @PrimaryGeneratedColumn({ name: 'id_pointrelais' })
  id_pointrelais: number;

  @Column({ name: 'num_pointrelais' })
  num_pointrelais: number;

  @Column({ name: 'adresse', length: 2000 })
  adresse: string;

  @Column({ name: 'num_telephone' })
  num_telephone: number;
  @Column({ name: 'capacite_max' })
  capacite_max: number;
  
  @Column({ name: 'taux_saturation' })
  taux_saturation: number;

  @Column({ name: 'nom_agent',length:1000 })
  nom_agent: string; 

  @Column({ name: 'idadminpointrelais' })
  idadminpointrelais: number; 
  
 /* @ManyToOne(() => AdminPointrelais, (adminPointrelais) => adminPointrelais.pointsRelais)
  @JoinColumn({ name: 'idadminpointrelais' })
  adminPointrelais: AdminPointrelais[];
  */

}

