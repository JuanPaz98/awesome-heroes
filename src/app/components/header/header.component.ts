import { Component, OnInit } from '@angular/core';
import { DataHeroeService } from '../../services/data-heroe.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dataHeroe: DataHeroeService) { }

  ngOnInit(): void {
  }

}
