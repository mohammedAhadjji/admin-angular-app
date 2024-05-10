import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { BodyClassService } from '../services/bodyservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'adminFrontend-angular';
  isUserRoute: boolean = false;
  userData: any;
  firstClass: string[] = ['hold-transition', 'fixed', 'skin-blue', 'sidebar-mini'];
  secondClass: string[] = ['fixed', 'skin-blue', 'sidebar-mini', 'sidebar-collapse'];
  currentClass: string[] = this.firstClass;

  constructor(private userService: UserService, private bodyClassService: BodyClassService, private router: Router) { }
  
  ngOnInit() {
    this.isUserRoute = this.router.url.startsWith('/users');
  }

  toggleClasses() {
    this.bodyClassService.toggleClasses(this.firstClass, this.secondClass);
  }

  async createUser(){
    try {
      this.userData = await this.userService.createUser();
      console.log(this.userData);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la création de l'utilisateur :", error);
    }
  }
}
