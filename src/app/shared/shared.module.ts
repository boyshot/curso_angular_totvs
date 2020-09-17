import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvaliacaoComponent } from './avaliacao.component';
import { FormsModule } from '@angular/forms';
import { convertToTracePipe } from '../pipes/convert-to-trace';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';

@NgModule({
  declarations: [
    AvaliacaoComponent,
    convertToTracePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvaliacaoComponent,
    CommonModule,
    FormsModule,
    convertToTracePipe,
    BrowserModule,
    HttpClientModule,
    PoModule
  ]
})
export class SharedModule { }
