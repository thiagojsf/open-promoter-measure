import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  salvarDados(event) {
    console.log("nome: " + this.nome);
    console.log("email: " + this.email);
    console.log("idade: " + this.idade);
    console.log("sexo: " + this.sexo);
      }

  ngOnInit() {
  
  }

}
