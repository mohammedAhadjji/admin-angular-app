import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {
  path = 'http://localhost:8001/api/team_members';

  constructor(private http: HttpClient) { }

  getmember() {
    return this.http.get<any>('http://localhost:8001/api/team_members')
      .toPromise()
      .then(response => response)
      .catch(error => {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        throw error;
      });
  }
}
