import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategoria, IDistance } from './search-params.models';
import { SearchParamsService } from './search-params.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-params',
  templateUrl: './search-params.component.html',
  styleUrls: ['./search-params.component.scss']
})
export class SearchParamsComponent implements OnInit {

  categoriaSelected: ICategoria = {
    label: 'nenhuma',
    id: -1,
  }
  distanciaSelected: IDistance;

  categorias$: Observable<Array<ICategoria>>;
  distancias$: Observable<Array<IDistance>>;


  constructor(private searchParamsService: SearchParamsService) { }

  selectCategoria(categoria: ICategoria ) {
    this.categoriaSelected = categoria;
  }
  
  selectDistancia(distancia: IDistance ) {
    this.distanciaSelected = distancia;
  }

  ngOnInit() {
    this.categorias$ = this.searchParamsService.getCategorias();
    this.distancias$ = this.searchParamsService.getDistancias()
      .pipe(tap(e => this.distanciaSelected = e[0]));
  }

}
