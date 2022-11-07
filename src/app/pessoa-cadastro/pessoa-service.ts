import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable(
    { providedIn: 'root' }
)
export class PessoaService {
    
    constructor(private http: HttpClient){}

    create(pessoa: any): Observable<any> {
        return this.http.post('http://localhost:4200/api/pessoa', pessoa);
    }

    listar(): Observable<any> {
        return this.http.get('http://localhost:4200/api/pessoa');
    }
}