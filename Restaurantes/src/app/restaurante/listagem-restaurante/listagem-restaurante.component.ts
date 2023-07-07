import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Restaurante } from 'src/app/shared/module/restaurante';
import { RestauranteService } from "../../shared/services/restaurante.service"
import {IMensagem} from '../../shared/module/IMensagem';

@Component({
  selector: 'app-listagem-restaurante',
  templateUrl: './listagem-restaurante.component.html',
  styleUrls: ['./listagem-restaurante.component.scss']
})
export class ListagemRestauranteComponent implements OnInit {
  restaurantes = Array<Restaurante>();

  constructor(public roteador: Router, private restauranteService: RestauranteService,private mensagemService: IMensagem){
  }

  ngOnInit() {
    this.restauranteService.listar().subscribe(
      restaurantes=>this.restaurantes = restaurantes
    );
  }

  editar(restaurante: Restaurante): void {
    this.roteador.navigate(['CadastrarRestaurantes', restaurante.id]);
  }

  excluir(restaurante: Restaurante): void {
    this.restauranteService.remover(restaurante.id).subscribe(
      resposta => {
        const indx = this.restaurantes.findIndex(r => r.id === restaurante.id);
        if(indx > -1) {
          this.restaurantes.splice(indx, 1);
          this.mensagemService.erro('Restaurante removido com sucesso!');
        }
      }
    )
  }
}
