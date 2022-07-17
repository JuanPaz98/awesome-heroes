import { Component, OnInit } from '@angular/core';

import { DataHeroeService } from '../../services/data-heroe.service'


@Component({
  selector: 'app-heroe-detail',
  templateUrl: './heroe-detail.component.html',
  styleUrls: ['./heroe-detail.component.scss']
})
export class HeroeDetailComponent implements OnInit {

  constructor( public DataHeroeService: DataHeroeService) { }

  ngOnInit(): void {
  }
  

  onLike(){
    this.DataHeroeService.heroeData.likes +=1;
    console.log(this.DataHeroeService)
    this.DataHeroeService.onUpdateHeroe()
  }
  onDislike(){
    this.DataHeroeService.heroeData.dislikes +=1;
    console.log(this.DataHeroeService)
    this.DataHeroeService.onUpdateHeroe()
  }
}
