import { Component, OnInit } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service'
import { Heroe } from '../../interfaces/heroe'
import { DataHeroeService } from '../../services/data-heroe.service'

@Component({
  selector: 'app-list-of-heroes',
  templateUrl: './list-of-heroes.component.html',
  styleUrls: ['./list-of-heroes.component.scss']
})
export class ListOfHeroesComponent implements OnInit {
  heroes: Heroe[] = [];
 
  constructor(private ApiSvc: ApiConnectionService, private newUpdate: DataHeroeService) { }
  
  ngOnInit(): void {
    this.onGetHeroes()
  }

  onGetHeroes(){
    this.ApiSvc.getAllHeroes().subscribe(data => {
      this.heroes = data;
      this.newUpdate.heroeData = data[0]
      console.log('heroes array', this.heroes)
    })
  }
 /*  onUpdateHeroe(){
    this.ApiSvc.updateHeroe(this.newUpdate.heroeData).subscribe(data => {
      const indexToUpdate = data ? this.heroes.findIndex(h => h.id == data.id): -1;
      if(indexToUpdate > -1) {
        this.heroes[indexToUpdate] = data
        this.newUpdate.heroeData = data;
      }
      console.log(this.heroes)
    })    
  }

  onLike(){
    this.newUpdate.heroeData.likes +=1;
    console.log(this.newUpdate)
    this.onUpdateHeroe()
  }
  onDislike(){
    this.newUpdate.heroeData.dislikes +=1;
    console.log(this.newUpdate)
    this.onUpdateHeroe()
  } */

}
