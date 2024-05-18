import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component } from '@angular/core';
import { BodyClassService } from '../services/bodyservice.service';
import { TitleService } from '../services/title.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'adminFrontend-angular';
  isUserRoute: boolean = false;
  isActive: boolean = false;
  isActivenews: boolean = false;
  userData: any;
  firstClass: string[] = ['hold-transition', 'fixed', 'skin-blue', 'sidebar-mini'];
  secondClass: string[] = ['fixed', 'skin-blue', 'sidebar-mini', 'sidebar-collapse','sidebar-open'];//fixed skin-blue sidebar-mini sidebar-open
  currentClass: string[] = this.firstClass;
 
  constructor(private userService: UserService, private bodyClassService: BodyClassService, private router: Router,private titleService: TitleService) { }
  
  ngOnInit() {
    this.isUserRoute = this.router.url.startsWith('/users');
    this.titleService.getTitle().subscribe((title) => {
      this.showTitleCharacterByCharacter(title);
    });
  }
  showTitleCharacterByCharacter(title: string) {
    this.title = ''; 
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < title.length) {
        this.title += title[index];
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 50); 
  }



  toggleActive() {
    this.isActive = !this.isActive;
    
  }
  togglenewsActive() {
    this.isActivenews = !this.isActivenews;
  }
  toggleClasses() {
    this.bodyClassService.toggleClasses(this.firstClass, this.secondClass);
  }

  async getUsers() {
    try {
      const response = await this.userService.getUsers();
      this.userData = response['hydra:member']; // Assurez-vous de récupérer les données de la bonne clé
      console.log(this.userData);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des utilisateurs :", error);
    }
  }
  
}
