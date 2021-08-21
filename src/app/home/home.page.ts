import { Component, OnInit } from '@angular/core';
import { RankingService } from './ranking.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private rankingService: RankingService) {}  // Here you create an instances of the service

  ngOnInit() {
    this.rankingService.getRanking()
    .subscribe( data=>{
      console.log(data)
    })
  }

}
