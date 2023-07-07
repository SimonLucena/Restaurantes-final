import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroRestauranteComponent } from './restaurante/cadastro-restaurante/cadastro-restaurante.component';
import { ListagemRestauranteComponent } from './restaurante/listagem-restaurante/listagem-restaurante.component';


const routes: Routes = [
    { path: "CadastrarRestaurantes", component:CadastroRestauranteComponent },
    { path: "CadastrarRestaurantes/:id", component:CadastroRestauranteComponent },
    { path: "ListarRestaurantes", component:ListagemRestauranteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
