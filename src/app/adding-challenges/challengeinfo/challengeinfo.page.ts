import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengesService } from '../challenges.service';
import { Challenge } from './challenge.model';

@Component({
  selector: 'app-challengeinfo',
  templateUrl: './challengeinfo.page.html',
  styleUrls: ['./challengeinfo.page.scss'],
})
export class ChallengeinfoPage implements OnInit {

  challenge: Challenge;
 

  constructor(private activatedRoute: ActivatedRoute, private challengesService=ChallengesService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap =>{
      // Validation if(!paramMap)
      const recipedId=paramMap.get('challengeId') 
      this.challenge=this.challengesService.getChallenge(recipedId); // Autogenerado
      console.log('challengeId') 
    })
  } 
}
