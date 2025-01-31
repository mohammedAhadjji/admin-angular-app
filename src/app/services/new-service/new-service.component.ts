import { Component } from '@angular/core';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrl: './new-service.component.css'
})
export class NewServiceComponent {
  serviceData = {
    name: '',
    description: '',
    // Add other properties as needed
  };

  constructor(private servicesService: ServicesService) {}

  async createService() {
    try {
      const response = await this.servicesService.createService(this.serviceData).toPromise();
      console.log('Service created successfully:', response);
    } catch (error) {
      console.error('Error creating service:', error);
    }
  }
}