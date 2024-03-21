import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

//(agentpointrelais)correspond au nom du tableau fil base données
@Entity({ name: 'agentpointrelais' }) 
export class AgentPointrelais {
  @PrimaryGeneratedColumn({ name: 'idagentpointrelais' })
  idagentpointrelais: number;

  @Column({ name: 'nom', length: 100 })
  nom: string;

  @Column({ name: 'prenom', length: 100 })
  prenom: string;

  @Column({ name: 'numerotelephone' })
  numerotelephone: number;

  @Column({ name: 'motdepasse' })
  motdepasse: string; // 
}
