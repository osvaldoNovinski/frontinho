import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SituacaoCartorioModel } from './situacao-cartorio-model.model';
import { environment } from 'src/environments/environment';

const API = environment.baseUrl+'/situacaocartorio';

//situacaocartorio/getall

@Injectable({
  providedIn: 'root'
})
export class SituacaoCartorioService {

  

  constructor(private http: HttpClient) { }

  /** Método do tipo Http POST, recebe como parâmetro QueryParamsModel e retorna a consulta paginada do tipo QueryResultsModel,*/
  public getAll(): Observable<SituacaoCartorioModel[]> {
    return this.http.get<SituacaoCartorioModel[]>(API+"/getall");
  }
}
