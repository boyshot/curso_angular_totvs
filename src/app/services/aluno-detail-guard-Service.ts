//Classe para validação de rotas

import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    Router
} from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class AlunoDetailGuardService implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        // + converte de string para inteiro
        let codPessoa = +route.url[1].path;

        if (codPessoa < 1) {
            alert('Parâmetro Inválido');
            this.router.navigate(['/alunos']);
            return false
        }

        return true;
    }
}