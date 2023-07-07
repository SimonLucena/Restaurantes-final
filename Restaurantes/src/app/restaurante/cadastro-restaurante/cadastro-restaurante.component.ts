import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Restaurante } from 'src/app/shared/module/restaurante';
import { RestauranteService } from 'src/app/shared/services/restaurante.service';

@Component({
  selector: 'app-cadastro-restaurante',
  templateUrl: './cadastro-restaurante.component.html',
  styleUrls: ['./cadastro-restaurante.component.scss']
})
export class CadastroRestauranteComponent implements OnInit {
  nomeBotaoManutencao = "Cadastro";

  restaurante: Restaurante;
  opCadastro = true;

  constructor(private rotaA: ActivatedRoute, private restauranteService: RestauranteService, private roteador:Router){
    this.restaurante = new Restaurante();
    if(this.rotaA.snapshot.paramMap.has('id')){
      this.opCadastro=false;
      const idEdit = Number(this.rotaA.snapshot.paramMap.get('id'));
      this.restauranteService.pesquisarPorId(idEdit).subscribe(
        restauranteReturned => this.restaurante = restauranteReturned
      );
    }
  }

  ngOnInit(): void {
  }

  cadastrar(): void {
    if(this.restaurante.id){
      this.restauranteService.atualizar(this.restaurante).subscribe(
        restauranteAlt => {
          console.log(restauranteAlt);
          this.roteador.navigate(['ListarRestaurantes']);
        }
      );
    }else{
      
      this.restauranteService.inserir(this.restaurante).subscribe(
        restauranteInsert => {
          console.log(restauranteInsert);
          this.roteador.navigate(['ListarRestaurantes']);
        }
      )
    }
  }
}
