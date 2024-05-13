import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  path = 'http:/localhost:8001/api/offres';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>('http://localhost:8001/api/offres')
      .toPromise()
      .then(response => response)
      .catch(error => {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        throw error;
      });
  }
}
