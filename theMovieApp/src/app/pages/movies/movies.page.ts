import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService,  } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  resultadosBusqueda: Observable<any>;
  busqueda = '';

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  //Actualiza nuestros resultados de busqueda
  updateBusqueda() {
    this.resultadosBusqueda = this.movieService.datosBusqueda(this.busqueda);
  }
}
