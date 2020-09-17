import { Injectable } from '@angular/core';
import { IAluno } from '../alunos/aluno';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AlunoService {

    private alunourl = 'api/alunos/alunos.json';
    private alunourlFake = 'http://localhost:3000/alunos';

    constructor(private http: HttpClient) { }

    getAlunosApi(): Observable<IAluno[]> {
       return this.http.get<IAluno[]>(this.alunourl).pipe(
           tap(data => console.log('Todos: '+JSON.stringify(data))),
           catchError(data => this.handleError)
       )
    }

    getAlunoApiFake(id:number): Observable<IAluno> {
           
        let novaUrl = this.alunourlFake+"/"+id;
        console.log(novaUrl);

        return this.http.get<IAluno>(novaUrl).pipe(
            tap(data => console.log('Todos: '+JSON.stringify(data))),
            catchError(data => this.handleError)
        )
     }

    private handleError(err: HttpErrorResponse){
        let msg = '';
        if(err.error instanceof ErrorEvent){
            msg = `Código retornado do servidor: ${err.status}. 
                   Erro: ${err.message}`;
        } else { 
            msg = `Erro: ${err.message}`;
        }

        console.error(msg);
        return throwError(msg);
    }


    getAlunos(): IAluno[] {
        return [
            {
                "id":1,
                "codPessoa": 1,
                "nome": "Mr. Bin",
                "ra": "ES 01493",
                "periodo": "2020/1",
                "disciplina": "Português",
                "nota": 19.95,
                "valor": 98.546,
                "avaliacao": 3.2,
                "urlFoto": "assets/images/mr_bin.png"
            },
            {
                "id":2,
                "codPessoa": 2,
                "nome": "Juliana Ferreira",
                "ra": "ES 56202",
                "periodo": "2020/1",
                "disciplina": "Português",
                "nota": 20.20,
                "valor": 91.005,
                "avaliacao": 3.2,
                "urlFoto": "assets/images/juliana.png"
            },
            {
                "id":3,
                "codPessoa": 3,
                "nome": "Carlos Eduardo",
                "ra": "Es 35478",
                "periodo": "2020/1",
                "disciplina": "Matemática",
                "nota": 18.00,
                "valor": 88.14,
                "avaliacao": 4.4,
                "urlFoto": "assets/images/carlos.png"
            },
            {
                "id":4,
                "codPessoa": 4,
                "nome": "Fernanda Silva",
                "ra": "Es 12417",
                "periodo": "2020/1",
                "disciplina": "Matemática",
                "nota": 19.50,
                "valor": 89.373,
                "avaliacao": 2.4,
                "urlFoto": "assets/images/fernanda.png"
            },
            {
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
            }
        ];
    }
}