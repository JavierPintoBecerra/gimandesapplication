import { Component, OnInit } from '@angular/core';
import { ChallengesService } from './challenges.service';

@Component({
  selector: 'app-adding-challenges',
  templateUrl: './adding-challenges.page.html',
  styleUrls: ['./adding-challenges.page.scss'],
})
export class AddingChallengesPage implements OnInit {

  challenges =[]
  constructor(private challengesService: ChallengesService) { }      

  ngOnInit() {
    this.challenges=this.challengesService.getChallenges()  //for printing the data
  }

}
