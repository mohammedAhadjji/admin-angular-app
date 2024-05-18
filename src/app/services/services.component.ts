import { ServicesService } from './../../services/services.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  serviceData: any;
  constructor(private router: Router, private servicesService: ServicesService){
    
  }
  ngOnInit() {
    this.getmember();
  }
  async getmember() {
    try {
      const response = await this.servicesService.getservices();
      this.serviceData = response['hydra:member']; // Assurez-vous de récupérer les données de la bonne clé
      console.log(this.serviceData);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des utilisateurs :", error);
    }
  }
}
