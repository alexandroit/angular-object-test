import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepComponent } from './cep/cep.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CepComponent],
  exports: [CepComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CepModule { }
