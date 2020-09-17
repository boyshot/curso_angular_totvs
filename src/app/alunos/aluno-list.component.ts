import { Component, OnInit } from '@angular/core';
import { IAluno } from './aluno';
import { AlunoService } from '../services/aluno-service';
import { PoTableColumn } from '@po-ui/ng-components';
import { Router } from '@angular/router';

@Component({
  selector: 'edu-alunos',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})

export class AlunoListComponent implements OnInit {

  constructor(private alunoService: AlunoService,
    private router: Router) { }

  ngOnInit(): void {
    console.log('Iniciando o Componente');

    //this.alunos = this.alunoService.getAlunos();

    // this.alunoService.getAlunosApi().subscribe({
    //   next: alunos => {
    //     this.alunos = alunos;
    //     this.alunosFiltrados = this.alunos;
    //   },
    //error: erro => this.errorMessage = erro
    //})

    this.alunoService.getAlunosApi().subscribe({
      next: alunos => this.getAlunoService(alunos),
      error: erro => this.errorMessage = erro
    });
  }

  getAlunoService(alunos: IAluno[]) {
    this.alunos = alunos;
    this.alunosFiltrados = this.alunos;
  }

  tituloPagina = 'Listagem de Alunos';
  fotoWidth = 40;
  fotoMargin = 2;
  exibirFoto = true;

  private alunos: IAluno[];
  alunosFiltrados: IAluno[];
  private _filtro: string;
  private errorMessage: string;

  get filtro(): string {
    return this._filtro;
  }

  set filtro(value: string) {
    this._filtro = value;
    this.alunosFiltrados = this._filtro ?
      this.fazFiltro(this._filtro) : this.alunos;
  }

  fazFiltro(query: string): IAluno[] {
    this.tituloPagina = 'Listagem de Alunos';
    query = query.toLocaleLowerCase();
    return this.alunos.filter((aluno: IAluno) =>
      aluno.nome.toLocaleLowerCase().indexOf(query) !== -1);
  }

  mostrarImagem(): void {
    this.exibirFoto = !this.exibirFoto;
  }

  getTextoBotaoTipoAcao() {
    return this.exibirFoto ? 'Esconder Foto' : 'Mostrar Foto';
  }

  onNotificacao(msg: string): void {
    this.tituloPagina = 'Lista de alunos: ' + msg;
  }

  editAluno(ra, aluno) {
    this.router.navigate(['/aluno', aluno.codPessoa]);
  }


  /*Propriedades P.O*/
  tableColumns: Array<PoTableColumn> = [
    { property: 'codPessoa', label: 'Cód Pessoa', visible: false,  },
    { property: 'urlFoto', label: 'Foto', type: 'columnTemplate' },
    { property: 'ra', label: 'Ra', type: 'link', action: this.editAluno.bind(this), color: 'color-03' },
    { property: 'nome', label: 'Nome' },
    { property: 'periodo', label: 'Período' },
    { property: 'disciplina', label: 'Disciplina' },
    { property: 'nota', label: 'Nota' },
    { property: 'avaliacao', label: 'Avaliação', type: 'cellTemplate' },
    { property: 'valor', label: 'Valor'},
  ];



}