import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengesService } from '../challenges.service';
import { Challenge } from './challenge.model';
import { Location } from '@angular/common';
@Component({
  selector: 'app-challengeinfo',
  templateUrl: './challengeinfo.page.html',
  styleUrls: ['./challengeinfo.page.scss'],
})
export class ChallengeinfoPage implements OnInit {

  public challenge: Challenge;
  public location: Location;
  public idChallenge: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public challengesService: ChallengesService,
    public router: Router
  ) {

    //console.log(this.location.path());

    this.idChallenge=this.activatedRoute.snapshot.paramMap.get('challengeId')

    this.challenge = this.challengesService.getChallenge(this.idChallenge); // Autogenerado

    console.log(this.challenge);
  }

  ngOnInit() {
  };
}
