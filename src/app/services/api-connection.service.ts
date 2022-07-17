import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe, UpdateHeroeDTO } from '../interfaces/heroe'

const httpOptions ={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  API = 'http://localhost:3000/heroes'

  constructor(private http: HttpClient) { }

  getAllHeroes(){
    return this.http.get<Heroe[]>(this.API)
  }
  updateHeroe(heroe: UpdateHeroeDTO){
    const url = `${this.API}/${heroe.id}`
    return this.http.put<Heroe>(url, heroe, httpOptions)
  }


}
