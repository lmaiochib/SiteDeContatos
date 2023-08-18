import { Component } from '@angular/core';
import { ApiContatoService } from '../api-contato.service';
import { Contato } from '../contato';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent {
  contatos!: Contato[];

  constructor(private apiContatoService : ApiContatoService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.apiContatoService.listar().subscribe(
      (lista) => {this.contatos = lista}
    )
    //teste
  }

  listar2() {
    this.apiContatoService.listar().subscribe(
      (lista) => {this.contatos = lista}
    )
    //teste
  }
}
