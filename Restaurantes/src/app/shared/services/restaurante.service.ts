import { Injectable } from '@angular/core';
import { Restaurante } from '../module/restaurante';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  URL_RESTAURANTES = 'http://localhost:3000/restaurantes';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Restaurante[]> {
    return this.httpClient.get<Restaurante[]>(this.URL_RESTAURANTES);
  }

  inserir(restaurante: Restaurante): Observable<Restaurante> {
    return this.httpClient.post<Restaurante>(this.URL_RESTAURANTES, restaurante);
  }

  remover(id: number): Observable<object>{
    return this.httpClient.delete(`${this.URL_RESTAURANTES}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Restaurante> {
    return this.httpClient.get<Restaurante>(`${this.URL_RESTAURANTES}/${id}`);
  }

  atualizar(restaurante: Restaurante): Observable<Restaurante> {
    return this.httpClient.put<Restaurante>(`${this.URL_RESTAURANTES}/${restaurante.id}`, restaurante);
  }
}
