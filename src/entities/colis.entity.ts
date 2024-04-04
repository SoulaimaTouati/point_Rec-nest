import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'coliss' }) 
export class Colis {

 

  @Column({ name: 'num_colis', type:'bigint' })
  num_Colis: string ;

  @Column({ name: 'description', length: 1000 })
  description: string ;

  @Column({ name: 'poids' })
  poids: number ;

  @Column({ name: 'nom_expediteur', length: 1000 })
  nom_Expediteur: string ; 

  @Column({ name: 'nom_destinataire', length: 1000 })
  nom_Destinataire: string ;

  @Column({ name: 'num_point_relais_destinataire' })
  numPointRelaisDestinataire: number ;

  @Column({ name: 'date_heure_expedition',type:'datetime' })
  dateHeureExpedition: Date ;

  @Column({ name: 'date_heure_livraison',type:'datetime' })
  dateHeureLivraison: Date ;

  @Column({ name: 'etat-colis' })
  etatColis: number ;

  @Column({ name: 'adresse', length: 10000 })
  adresse: string ;

  @PrimaryGeneratedColumn({ name: 'id_colis' })
  id_Colis: number ;
}
