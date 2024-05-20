import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TeamMemberService } from '../../../services/team-member.service';

@Component({
  selector: 'app-team-member-create',
  templateUrl: './team-member-create.component.html',
  styleUrls: ['./team-member-create.component.css']
})
export class TeamMemberCreateComponent {
  member: any = {};
  imageFile: File | null = null;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(
    private router: Router,
    private teamMemberService: TeamMemberService
  ) {}

  async createMember() {
    try {
      // Upload the image if an image file is selected
      if (this.imageFile) {
        try {
          const imageResponse = await this.teamMemberService.postImage(this.imageFile).toPromise();
          this.member.image = imageResponse.name; // Access the 'name' property directly from the response
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
      
  
      // Create the new team member
      const createResponse = await this.teamMemberService.create(this.member);
      console.log('Membre créé avec succès :', createResponse);
  
      // Redirect to the team members list after creation
      this.router.navigate(['/TeamMembers']);
    } catch (error) {
      console.error('Erreur lors de la création du membre de l\'équipe :', error);
    }
  }
  

  onFileChange(event: any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.imageFile = file;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
    }
  }

  retourMemberlist() {
    this.router.navigate(['/TeamMembers']);
  }

  onSubmit() {
    this.createMember();
  }
}
