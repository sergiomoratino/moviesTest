import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  datos = null;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  //Al iniciar la pantalla obtiene el id del link clicado y carga los detalles de la película
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.movieService.obtenerDetalles(id).subscribe(result => {
      console.log('details: ', result);
      this.datos = result;
    })
  }

}
