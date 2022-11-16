import { Component, OnInit } from '@angular/core';
import { ContatosComponent } from '../contatos/contatos.component';
@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
  
  public contatos:Array<Object> = [];

  public qtdDadosAdd = 1;
  public modalAdd = false;

  constructor() { 
    this.adicionarContato();
    this.deletarContato();
  }

  setQtdDadosAdd(valor: any){
    // console.log(valor);
    this.qtdDadosAdd = valor;
    // this.qtdDadosAdd = Number((<HTMLInputElement>event.target).value);
  }

  ngOnInit(): void {

  }

  deletarContato(){
   this.contatos = [];
  }

  adicionarContato(){
    
    for (let i = 0; i < this.qtdDadosAdd; i++) {

      let contato = new Object({
        id: this.contatos.length + 1,
        nome: 'Contato ' + (this.contatos.length + 1),
        telefone: 'Telefone ' + (this.contatos.length + 1),
        email: 'Email ' + (this.contatos.length + 1)
      });

      this.contatos.push({
        id: this.contatos.length + 1,
        nome: 'Contato ' + (this.contatos.length + 1),
        telefone: 'Telefone ' + (this.contatos.length + 1),
        email: 'Email ' + (this.contatos.length + 1)
      });
      this.modalAdd = false;
    }
    console.log(this.contatos)
  }

}
