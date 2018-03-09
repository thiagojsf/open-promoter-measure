import { Component, OnInit } from '@angular/core';
import { Ranking } from './ranking.model'

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {


  public bolaCheia:string = 'bola-cheia';
  public bolaVazia:string = 'bola-vazia';
  public isCheia: boolean = false;
  public numero : number ;


  public bolas: Array<Ranking> = [
    new Ranking(this.isCheia),
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

  public mudarCor(numero:number){
      this.numero = numero
      for(let i = 0; i < this.bolas.length ; i++){
        if ( i <= this.numero){
          this.bolas[i].isCheia = true;
        } else {
          this.bolas[i].isCheia = false;
        }
      }
  }

  constructor() { 

  }

  ngOnInit() {
  }

}
