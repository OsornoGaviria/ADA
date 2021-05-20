import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders   } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) { }

  apiUrl= 'http://ideapp.xyz/AdaPrueba/';

  verProductos(data){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.apiUrl,JSON.stringify(data),{headers:headers});
  }

  verProducto(data){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.apiUrl,JSON.stringify(data),{headers:headers});
  }

  nuevoProducto(data){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.apiUrl,JSON.stringify(data),{headers:headers});
  }

  eliminarProducto(data){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.apiUrl,JSON.stringify(data),{headers:headers});
  }


  actualizarProducto(data){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.apiUrl,JSON.stringify(data),{headers:headers});
  }
  
}
