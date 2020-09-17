/*Import Framework*/
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/*Import Aplicação*/
import { AppComponent } from './app.component';
import { SobreComponent } from './home/sobre.component';
import { AlunoModule } from './alunos/aluno.module';
import { SharedModule } from './shared/shared.module';
import { PoTemplatesModule } from '@po-ui/ng-templates';


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent
  ],
  imports: [
    AlunoModule,
    RouterModule.forRoot([
      { path: 'sobre', component: SobreComponent },
      { path: '', redirectTo: 'sobre', pathMatch: 'full' },
      { path: '**', redirectTo: 'sobre', pathMatch: 'full' }
    ]),
    SharedModule,
    PoTemplatesModule
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
