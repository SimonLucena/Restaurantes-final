import { Injectable } from '@angular/core';
import {IMensagem} from '../module/IMensagem';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensagemSweetService implements IMensagem {

  constructor() { }

  erro(mensagem: string): void {
    Swal.fire(
      {
        title: 'Erro',
        timer: 5000,
        text: mensagem,
        icon: 'error',
        confirmButtonText: 'Ok'
      }
    );
  }

  info(mensagem: string): void {
  }

  sucesso(mensagem: string): void {
    Swal.fire(
      {
        title: 'Sucesso',
        timer: 5000,
        text: mensagem,
        icon: 'success',
        confirmButtonText: 'Ok'
      }
    );
  }
}
