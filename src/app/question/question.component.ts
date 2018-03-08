import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question:string = 'Você ficou satisfeito com o nosso atendimento?';

  constructor() { }

  ngOnInit() {
  }

}
