import { Component, OnInit } from '@angular/core';
import { IAluno } from './aluno';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {

  tituloPagina = 'Informações detalhadas do aluno';
  aluno: IAluno;

 constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    let codPessoa = +this.route.snapshot.paramMap.get('id');
    this.tituloPagina += ' '+codPessoa;

    this.aluno = {
      "id":5,
      "codPessoa": 5,
      "nome": "Maria Joaquina",
      "ra": "Es 01520",
      "periodo": "2020/1",
      "disciplina": "Biologia",
      "nota": 15.70,
      "valor": 95.792,
      "avaliacao": 4.9,
      "urlFoto": "assets/images/maria.png"
    };
  }

  onBack(){
    this.router.navigate(['/alunos']);
  }
}
