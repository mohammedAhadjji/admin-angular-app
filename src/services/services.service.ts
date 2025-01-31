import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl: string = 'http://localhost:8001/api/services';
  constructor(private http:HttpClient) { }

  getservices() {
    return this.http.get<any>('http://localhost:8001/api/services')
      .toPromise()
      .then(response => response)
      .catch(error => {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        throw error;
      });
  }
  async getService(id: string): Promise<any> {
    try {
      const response = await this.http.get<any>(`${this.baseUrl}/${id}`).toPromise();
      return response;
    } catch (error) {
      console.error('Erreur lors de la récupération du service :', error);
      throw error;
    }
  }
  createService(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  editService(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, data);
  }

}
