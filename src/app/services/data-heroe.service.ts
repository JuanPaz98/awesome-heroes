import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe'
import { ApiConnectionService } from './api-connection.service'

@Injectable({
  providedIn: 'root'
})
export class DataHeroeService {

  heroes:Heroe[] = []

  heroeData: Heroe ={
    id: 1,
    name: "",
    description: "",
    likes: 0,
    dislikes: 0
  }
  constructor(public ApiSvc: ApiConnectionService) { }

  onUpdateHeroe(){
    this.ApiSvc.updateHeroe(this.heroeData).subscribe(data => {
      const indexToUpdate = data ? this.heroes.findIndex(h => h.id == data.id): -1;
      if(indexToUpdate > -1) {
        this.heroes[indexToUpdate] = data
        this.heroeData = data;
      }
      console.log(this.heroes)
    })    
  }
  
}
