import { Component, OnInit } from '@angular/core';
import { IAluno } from '../aluno';
import { AlunoService } from 'src/app/services/aluno-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edu-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  constructor(private route: ActivatedRoute, private alunoService: AlunoService) { }

  aluno: IAluno;
  private errorMessage: string;

  ngOnInit() {

    this.alunoService.getAlunoApiFake(+this.route.snapshot.paramMap.get('id')).subscribe({
      next: alunos => { this.aluno = alunos; },
      error: erro => this.errorMessage = erro
    });


  }

  cancel() {
    // cancel action here
  }

  save() {
    // save action here
  }

  saveNew() {
    // saveNew action here
  }

}
