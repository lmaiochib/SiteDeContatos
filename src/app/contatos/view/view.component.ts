import { Component } from '@angular/core';
import { Contato } from '../contato';
import { ApiContatoService } from '../api-contato.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html'
})
export class ViewComponent {
  id! : Number;
  contato! : Contato;

  constructor(
    private apiContatoService : ApiContatoService,
    private route : ActivatedRoute
    ) {}

    ngOnInit() {
      this.buscar();
    }

  buscar() {
    this.id = this.route.snapshot.params['id'];

    this.apiContatoService.buscar(this.id).subscribe(
      (pContato : Contato) => {this.contato = pContato}
    )
  }
}
