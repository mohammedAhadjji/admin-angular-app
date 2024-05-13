import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {
  private path = 'http://localhost:8001/api/destinations';

  constructor(private http: HttpClient) { }

  getdestinations(){
    return this.http.get<any>(this.path)
    .toPromise()
    .then(response => response)
    .catch(error => {
      console.error('Erreur lors de la création de l\'utilisateur :', error);
      throw error;
    });
  }
}
