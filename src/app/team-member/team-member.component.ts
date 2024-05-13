import { Router } from '@angular/router';
import { TeamMemberService } from './../../services/team-member.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.css'
})
export class TeamMemberComponent {
  TeamData: any;
  constructor(private router: Router, private teamMemberService: TeamMemberService){
    
  }
  ngOnInit() {
    this.getmember();
  }
  async getmember() {
    try {
      const response = await this.teamMemberService.getmember();
      this.TeamData = response['hydra:member']; // Assurez-vous de récupérer les données de la bonne clé
      console.log(this.TeamData);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des utilisateurs :", error);
    }
  }
}
