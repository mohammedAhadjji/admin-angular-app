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

  async updateMember(data: any) {
    if (!this.id) {
      console.error("ID de membre manquant pour la mise à jour.");
      return;
    }

    try {
      if (data.image) {
        const imageResponse = await this.teamMemberService.postImage(data.image);
        data.imageId = imageResponse.id; // Assurez-vous que l'objet de réponse contient l'ID de l'image
      }

      const updateResponse = await this.teamMemberService.update(this.id, data);
      this.TeamData = updateResponse['hydra:member'];
      console.log(this.TeamData);
    } catch (error) {
      console.error("Une erreur s'est produite lors de la mise à jour du membre de l'équipe :", error);
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

  editMember(id: string) {
    this.router.navigate(['teamMember_edit', id]);
  }
}
