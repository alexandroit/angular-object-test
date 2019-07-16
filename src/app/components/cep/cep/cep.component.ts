import { CepService } from './../../../services/cep/cep.service';
import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/models/cep';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css']
})
export class CepComponent implements OnInit {
    cep: Cep;
  constructor(private cepService: CepService) { }

  ngOnInit() {
    this.cepService.getCep().subscribe( cep => this.cep = cep);
  }

}
