import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  // contatos = [{
  //   id: 1,
  //   nome: 'Contato 1',
  //   telefone: 'Telefone 1',
  //   email: 'Email 1'
  // }]
  @Input() contatos: any;
  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.contatos);
  }

}
