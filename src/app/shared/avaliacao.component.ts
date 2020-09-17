import { Component, OnChanges, Input, Output, EventEmitter }
 from '@angular/core';

@Component({
  selector: 'edu-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnChanges {

  @Input()
  avaliacao: number = 4;

  @Output()
  notificacao = new EventEmitter<string>();

  avaliacaoWidth: number;

  ngOnChanges(): void {
    this.avaliacaoWidth = this.avaliacao * 15;
  }

  onClick(): void { 
    console.log(`Avaliação ${this.avaliacao}`); 
    this.notificacao.emit('Nota selecionada '+this.avaliacao);
  }
}