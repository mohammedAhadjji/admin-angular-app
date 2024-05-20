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
/*  postImage(imageFile: File): Promise<any> {
    const formData = new FormData();
    formData.append('file', imageFile);

    return this.http.post<any>(this.pathImg, formData).toPromise();
  }/
  postImage(image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', image);
    return this.http.post(`${this.pathImg}`, formData);
  }*/
  postImage(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${this.pathImg}`, formData); // Ensure that the response type is properly handled
  }
  create(member: any): Observable<any> {
    return this.http.post(`${this.path}`, member);
  }

  update(id: string, data: any): Promise<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/merge-patch+json'
    });

    return this.http.patch<any>(`${this.path}/${id}`, data, { headers }).toPromise();
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
  deleteMember(id: string): Promise<any> {
    return this.http.delete<any>(`${this.path}/${id}`).toPromise();
  }

  
}
