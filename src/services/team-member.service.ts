import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamMemberService {
  path = 'http://localhost:8001/api/team_members';
  pathImg = 'http://localhost:8001/api/image_ms';
  constructor(private http: HttpClient) { }
  postImage(imageFile: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', imageFile);

    return this.http.post<any>('http://localhost:8001/api/upload', formData).toPromise();
  }

  update(id: string, data: any): Promise<any> {
    return this.http.patch<any>(`${this.path}/${id}`, data).toPromise();
  }
  getMember(id: string): Observable<any> {
    return this.http.get<any>(`${this.path}/${id}`);
  }
  getmember() {
    return this.http.get<any>(this.path )
      .toPromise()
      .then(response => response)
      .catch(error => {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        throw error;
      });
  }
}
