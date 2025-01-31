import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-travller',
  templateUrl: './travller.component.html',
  styleUrl: './travller.component.css'
})
export class TravllerComponent {
  userData: any;
constructor(private router: Router, private userService: UserService){
  
}
ngOnInit() {
  this.getUsers();
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
async patchUserStatus(userId: number, status: string) {
  try {
    await this.userService.patchUserStatus(userId, status);
    this.getUsers(); // Refresh user data after patch
  } catch (error) {
    console.error("Une erreur s'est produite lors de la mise à jour du statut de l'utilisateur :", error);
  }
}

async deleteUser(userId: number) {
  try {
    await this.userService.deleteUser(userId).toPromise();
    this.getUsers(); // Refresh user data after delete
  } catch (error) {
    console.error("Une erreur s'est produite lors de la suppression de l'utilisateur :", error);
  }
}
}
