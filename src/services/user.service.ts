import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  path = 'http:/localhost:8001/api/clients';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>('http://localhost:8001/api/clients')
      .toPromise()
      .then(response => response)
      .catch(error => {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
        throw error;
      });
  }
  test(){
    // how can i read a file with input of type 'file'
    
//     var request = require('request');
// var fs = require('fs');
// var options = {
//   'method': 'POST',
//   'url': 'http://localhost:8001/api/offres',
//   'headers': {
//   },
//   formData: {
//     'Titre': '30 jour ou casa',
//     'Description': 'testestetse',
//     'date_debut': '2024-04-14T07:50:03.365Z',
//     'date_fin': '2024-04-19T07:50:03.365Z',
//     'planification': '30 jour ',
//     'image[0][file]': {
//       'value': fs.createReadStream('/path/to/file'),
//       'options': {
//         'filename': 'filename'
//         'contentType': null
//       }
//     },
//     'dateEperation': '2024-04-14T07:50:03.365Z',
//     'destination': '/api/destinations/1',
//     'image[1][file]': {
//       'value': fs.createReadStream('/path/to/file'),
//       'options': {
//         'filename': 'filename'
//         'contentType': null
//       }
//     }
//   }
// };
// request(options, function (error, response) {
//   if (error) throw new Error(error);
//   console.log(response.body);
// });

  }
}
