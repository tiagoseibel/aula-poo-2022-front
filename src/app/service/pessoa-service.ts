import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable(
    { providedIn: 'root' }
)
export class PessoaService {
    
    apiUrl : string = "http://localhost:4200/api/pessoa";

    constructor(private http: HttpClient){}

    createOrUpdate(pessoa: any): Observable<any> {
        if (pessoa.id) {
            return this.http.put(this.apiUrl, pessoa);
        } else {
            return this.http.post(this.apiUrl, pessoa);
        }
    }

    listar(): Observable<any> {
        return this.http.get(this.apiUrl);
    }

    byId(id: Number) : Observable<any> {
        return this.http.get(this.apiUrl + "/" + id);
    }

    delete(id: Number) : Observable<any> {
        return this.http.delete(this.apiUrl + "/" + id);
    }
}