import { Injectable } from '@angular/core';
import { Contato } from './contato';
//Client
import { HttpClient } from '@angular/common/http';
//Trabalha com Objetos
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiContatoService {

  url : string = 'http://localhost:8083';

  //Construtor da API PRIVATE SERVICE

  constructor(private http : HttpClient) { }

  listar() : Observable<Contato[]> {
    return this.http.get<Contato[]>(this.url)
  }

  adicionar(contato : Contato) : Observable<any> {
    return this.http.post<Contato>(this.url + '/add', contato);
  }

  atualizar(contato : Contato) : Observable<any> {
    return this.http.post<Contato>(this.url + '/atualizar', contato);
  }

  buscar(id : Number) : Observable<Contato> {
    return this.http.get<Contato>(this.url + '/' + id);
  }

  excluir(id : Number) : Observable<any> {
    return this.http.get<Contato>(this.url + '/deletar/' + id);
  }

}
