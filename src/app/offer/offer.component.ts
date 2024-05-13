import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {
confirmDelete(arg0: any) {
throw new Error('Method not implemented.');
}
  OfferData: any;
  constructor(private router: Router, private offerService: OfferService){
    
  }
  ngOnInit() {
    this.getOffer();
  }
  async getOffer() {
    try {
      const response = await this.offerService.getUsers();
      this.OfferData = response['hydra:member']; // Assurez-vous de récupérer les données de la bonne clé
      console.log(this.OfferData);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des utilisateurs :", error);
    }
  }
}
