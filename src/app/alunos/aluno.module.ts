import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AlunoListComponent } from './aluno-list.component';
import { AlunoDetailComponent } from './aluno-detail.component';
import { AlunoDetailGuardService } from '../services/aluno-detail-guard-Service';
import { SharedModule } from '../shared/shared.module';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

@NgModule({
    declarations: [
        AlunoListComponent,
        AlunoDetailComponent,
        AlunoFormComponent        
    ],
    imports: [
        BrowserModule,
        RouterModule.forChild([
            { path: 'alunos', component: AlunoListComponent },
            {
                path: 'alunos/detalhe/:id',
                component: AlunoDetailComponent,
                canActivate: [AlunoDetailGuardService]
            },
            {
                path: 'aluno/:id',
                component: AlunoFormComponent,
                canActivate: [AlunoDetailGuardService]
            }]
        ),
        SharedModule
    ]
})
export class AlunoModule { }