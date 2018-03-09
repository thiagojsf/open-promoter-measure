import { Component, OnInit } from '@angular/core';
import { Configuracoes } from '../configuracoes';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})

export class DadosPessoaisComponent implements OnInit {
  nome: string;
  email: string;
  idade: Number;
  sexo: string;
  cidade: string;

  constructor() { }

  salvarDados(event) {
    console.log("nome: " + this.nome);
    console.log("email: " + this.email);
    console.log("idade: " + this.idade);
    console.log("sexo: " + this.sexo);
    console.log("sexo: " + this.cidade);
    
   }

  ngOnInit() {
  
  }

}
