import { DestinationService } from './../../services/destination.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.css'
})
export class DestinationComponent {

planecran: any;
destinationData: any;
url: string | undefined;
constructor(private router: Router, private DestinationService: DestinationService){

  // Assurez-vous d'initialiser planecran correctement
  this.planecran = document.getElementById('planecran');
}

  closeModal(modalId: string ) {
    const modalElement = document.getElementById(modalId);
   
  
    if (modalElement) {
        modalElement.classList.remove('show');

        modalElement.style.display = 'none';
        
        
        // Si nécessaire, vous pouvez également réinitialiser les attributs aria et la classe modal-open sur le body
    }
}

confirmDelete() {
throw new Error('Method not implemented.');
}
 
  ngOnInit() {
    this.getdest();
    this.url = 'http://localhost:8001/attchments/destinations/';
  }
  showModal(modalId: string) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
      this.planecran.style.display = 'block';
     /* modalElement.setAttribute('aria-modal', 'true');
      modalElement.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');*/
    }
  }
  async getdest() {
    try {
      const response = await this.DestinationService.getdestinations();
      this.destinationData = response['hydra:member']; // Assurez-vous de récupérer les données de la bonne clé
      console.log(this.destinationData);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des utilisateurs :", error);
    }
  }
}
