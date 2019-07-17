import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from 'src/app/models/cep';
import { Observable } from 'rxjs';
import { catchError, map, tap, debounceTime , distinctUntilChanged} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  public cepGet(): Observable<Cep> {
    return this.http
                .get<Cep>('https://viacep.com.br/ws/01001000/json/');
  }
}
