import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'https://www.omdbapi.com/';
  apiKey = 'c1af0cbf';

  constructor(private http: HttpClient) { }

  //Obtiene las películas desde la API a partir del título
  datosBusqueda(titulo: string): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(titulo)}&apikey=${this.apiKey}`)
      .pipe(map(results => results['Search'])
    );
  }

  //Obtiene los detalles de la película desde su id
  obtenerDetalles(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
