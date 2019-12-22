// import { Injectable } from '@angular/core';
// import { MySouqConfig } from '../mysouq.config';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AuthService } from './../core/auth.service';
import { MySouqConfig } from '../mysouq.config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient, private authService: AuthService) { }

  public async getAllProducts(): Promise<any> {
    const url = MySouqConfig.getPath() + '/books';
    const token = await this.authService.getTokenFromStorage();
    return this.http.get(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }

  public async addNewProduct(data: object): Promise<any> {
    const url = MySouqConfig.getPath() + '/books/add';
    const token = await this.authService.getTokenFromStorage();

    return this.http.post(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async updateProduct(data): Promise<any> {
    const url = MySouqConfig.getPath() + `/books/${data._id}`;
    // const token = await this.authService.getTokenFromStorage();
    const token = 'blabla';
    return this.http.put(url, data, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
  public async deleteProduct(id: string): Promise<any> {
    const url = MySouqConfig.getPath() + `/books/${id}`;
    const token = await this.authService.getTokenFromStorage();

    return this.http.delete(url, {
      headers: new HttpHeaders().set('Authorization', token)
    });
  }
}
