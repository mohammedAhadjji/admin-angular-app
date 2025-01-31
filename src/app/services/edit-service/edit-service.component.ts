import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../../../services/services.service';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.css']
})
export class EditServiceComponent implements OnInit {
  serviceData: any = {};
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servicesService: ServicesService
  ) {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.getService();
  }

  async getService() {
    try {
      const response = await this.servicesService.getService(this.id); // Correct method name
      this.serviceData = response;
      console.log('Service data fetched successfully:', this.serviceData);
    } catch (error) {
      console.error('Error fetching service data:', error);
    }
  }

  async updateService() {
    try {
      const response = await this.servicesService.editService(this.id, this.serviceData).toPromise();
      console.log('Service updated successfully:', response);
      this.router.navigate(['/services']); // Navigate to the list of services or another relevant route after update
    } catch (error) {
      console.error('Error updating service:', error);
    }
  }
}
