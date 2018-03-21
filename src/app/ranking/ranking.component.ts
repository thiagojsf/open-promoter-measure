import { Component, OnInit } from '@angular/core';
import { Ranking } from './ranking.model'

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})

export class RankingComponent implements OnInit {

  public isCheia: boolean = false;
  public numero: number;

  public estrelas: Array<Ranking> = [
    new Ranking(this.isCheia),
    new Ranking(this.isCheia),
    new Ranking(this.isCheia),
    new Ranking(this.isCheia),
    new Ranking(this.isCheia),
    new Ranking(this.isCheia),
    new Ranking(this.isCheia),
    new Ranking(this.isCheia),
    new Ranking(this.isCheia),
    new Ranking(this.isCheia)
  ]

  public mudarCor(numero: number) {
    this.numero = numero
    
    for (let i = 0; i < this.estrelas.length; i++) {
      if(i <= this.numero && this.numero == 0 && !this.estrelas[1].isCheia) {
        this.estrelas[0].isCheia = !this.estrelas[0].isCheia;
      } else if (i <= this.numero) {
        this.estrelas[i].isCheia = true;
      } else {
        this.estrelas[i].isCheia = false;
      }
    }
  }

  constructor() {

  }

  ngOnInit() {
  }

}
