import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamMemberService } from './../../services/team-member.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {
  TeamData: any;
  updateData: any;
  id: string | undefined;

  constructor(private router: Router, private teamMemberService: TeamMemberService) {}

  ngOnInit() {
    this.getMembers();
  }

  async getMembers() {
    try {
      const response = await this.teamMemberService.getmember();
      this.TeamData = response['hydra:member']; // Assurez-vous de récupérer les données de la bonne clé
      console.log(this.TeamData);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la récupération des membres :", error);
    }
  }


  async confirmDelete(id: any) {
    if (confirm('Are you sure?')) {
      try {
        console.log(`Deleting member with id: ${id}`);
        await this.teamMemberService.deleteMember(id);
        console.log(`Member with id ${id} deleted successfully.`);
        // Rafraîchir la liste des membres après la suppression
        this.getMembers();
      } catch (error) {
        console.error(`Error deleting member with id ${id}:`, error);
      }
    }
  }
 newMember(){
   this.router.navigate(['TeamMembers_new']);
 }
  editMember(id: string) {
    this.router.navigate(['teamMember_edit', id]);
  }
}
