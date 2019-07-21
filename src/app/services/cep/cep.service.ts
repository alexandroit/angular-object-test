import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, interval, timer } from 'rxjs';
import { map,  mergeMap, startWith, retry } from 'rxjs/operators';

import { Cep } from 'src/app/models/cep';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  public cepGet(): Observable<Cep> {
    return timer( 0, 1000 * 60)
      .pipe(
        mergeMap(() => {
          const data = this.http
            .get<Cep>('https://viacep.com.br/ws/01001000/json/')
            .pipe(
              retry(3),
              map(result => {
                let cep = new Cep();
                cep = Object.assign(cep, result);
                return cep;
              }));
          return data;
        })
      );
  }
}
