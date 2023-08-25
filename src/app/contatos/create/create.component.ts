import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiContatoService } from '../api-contato.service';
import { Contato } from '../contato';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent {

  public form!: FormGroup;
  public submetido: boolean = false;
  public id!: number;
  contato!: Contato;

  constructor(
    private apiContatoService: ApiContatoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  createForm() {
    this.form = new FormGroup({
      id: new FormControl(''),
      nome: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.email])
    });

    this.id = this.route.snapshot.params['id'];

    if (this.id > 0) {
      this.apiContatoService.buscar(this.id).subscribe(
        (contato: Contato) => {
          this.contato = contato;
          this.form.setValue({
            id: this.contato.id,
            nome: this.contato.nome,
            email: this.contato.email
          })
        }
      )
    }
  }

  salvar() {
    this.submetido = true;

    if (this.id > 0) {
      this.apiContatoService.atualizar(this.form.value)
      .subscribe(
        () => {
          alert('Registro atualizado com sucesso!');
          this.router.navigateByUrl('contato/index');
        }
      );
    } else {
      this.apiContatoService.adicionar(this.form.value)
      .subscribe(
        () => {
          alert('Registro incluído com sucesso!');
          this.router.navigateByUrl('contato/index');
        }
      );
    }
  }
}
