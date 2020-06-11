import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from '../../../config';

const apiurl = api.SERVER_URL;;

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }

  getAllArticles(){
     return this.http.get(`${apiurl}/getallarticulos`);
  }

  uploadArticle(name, formData) {
    return this.http.post(`${apiurl}/uploadarticulo/${name}`, formData);
  }

  deleteArticle(name){
    return this.http.delete(`${apiurl}/deletearticulo/${name}`);
  }

  updateArticle(name,nameupdate){
    return this.http.put(`${apiurl}/updatearticulo/${name}/${nameupdate}`,name);
  }
  
}
