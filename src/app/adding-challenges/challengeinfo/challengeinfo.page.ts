import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengesService } from '../challenges.service';
import { Challenge } from './challenge.model';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
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
    public router: Router, private alertctrl:AlertController  
  ) {

    //console.log(this.location.path());

    this.idChallenge=this.activatedRoute.snapshot.paramMap.get('challengeId')

    this.challenge = this.challengesService.getChallenge(this.idChallenge); // Autogenerado

    console.log(this.challenge);
  }

  ngOnInit() {
    //There are some differences between this and Fazt's program 
  };
  async updateChallenge(){
    const alertElement=await this.alertctrl.create({
      header: 'did you complete the challenge?',
      message: 'Click ok if you already completed the challenge',
      buttons: [
        {
          text: 'Cancel', 
          role: 'cancel'
        },
        {
          text: 'OK', 
          handler: ()=>{
            console.log('Challenges Updated!!'); 
          }
        }

      ]
    });
    await alertElement.present(); 
  }
  public myDate: String = new Date().toISOString(); // Date  for restricting acces acordin to date
  
}
