import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from 'src/app/models/cep';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

public getCep(): Observable<Cep> {
    return this.http.get<Cep>('https://viacep.com.br/ws/01001000/json/');
  }
}
