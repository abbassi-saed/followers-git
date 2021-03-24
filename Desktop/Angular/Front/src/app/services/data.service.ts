import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private url : string,private http : HttpClient) { }

  getAll(){
    return this.http.get(this.url)
  }
  // pour retourné la liste des posts
  create(ressource)
  {
    return this.http.post(this.url,ressource)
  }
  //pour créé un post 

  update(ressource)
  {
    return this.http.put(this.url+'/'+ressource.id,ressource)
  }
  //modifié un post 
  delete(ressource)
  {
    return this.http.delete(this.url+'/'+ressource.id)
   
  }

}
