import { Component, Input, OnInit } from '@angular/core';
import { DataHeroeService } from '../../services/data-heroe.service'
import { Heroe } from '../../interfaces/heroe'

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.scss']
})
export class HeroeCardComponent implements OnInit {

  constructor() { }

  @Input() heroeCard: Heroe ={
      id: 1,
      name: "nombre prueba",
      description: "",
      image: "",
      likes: 0,
      dislikes: 0
  }
  ngOnInit(): void {
  }

}
