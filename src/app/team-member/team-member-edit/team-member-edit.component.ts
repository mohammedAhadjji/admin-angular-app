import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamMemberService } from '../../../services/team-member.service';

@Component({
  selector: 'app-team-member-edit',
  templateUrl: './team-member-edit.component.html',
  styleUrls: ['./team-member-edit.component.css']
})
export class TeamMemberEditComponent implements OnInit {
retourMemberlist() {
  this.router.navigate(['TeamMembers']);
}
onBannerChange($event: Event) {
throw new Error('Method not implemented.');
}
  member: any = {};
  id: string;
  imageFile: File | null = null;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private teamMemberService: TeamMemberService
  ) {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit() {
    this.getMember();
  }

  async getMember() {
    try {
      const response = await this.teamMemberService.getMember(this.id).toPromise();
      this.member = response;
      console.log('Membre de l\'équipe récupéré avec succès :', this.member);
    } catch (error) {
      console.error('Erreur lors de la récupération du membre de l\'équipe :', error);
    }
  }
  
  async updateMember() {
    try {
      if (this.imageFile) {
        try {
          const imageResponse = await this.teamMemberService.postImage(this.imageFile).toPromise();
          this.member.image = imageResponse.name; // Access the 'name' property directly from the response
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      }
      

      const updateResponse = await this.teamMemberService.update(this.id, this.member);
      console.log('Membre mis à jour avec succès :', updateResponse);

      // Rediriger vers la liste des membres après la mise à jour
      this.router.navigate(['/TeamMembers']);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du membre de l\'équipe :', error);
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
  
}
