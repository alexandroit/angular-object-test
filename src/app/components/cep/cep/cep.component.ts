import { CepService } from './../../../services/cep/cep.service';
import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/models/cep';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
    cep: Cep;
  constructor(private cepService: CepService) { }

  ngOnInit() {
    this.cepService.cepGet().subscribe( (cep: Cep) => {
      this.cep = cep;
      console.log('cityAndUfGet', this.cep.cityAndUfGet());
    });
  }

}
