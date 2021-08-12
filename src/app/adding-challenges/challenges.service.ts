import { Injectable } from '@angular/core';
import { Challenge } from './challengeinfo/challenge.model';

@Injectable({
  providedIn: 'root'
})
export class ChallengesService {
  
  private challenges: Challenge[] =[
    {
      id:'1',
      title: 'Squats',
      imageURL:'https://www.spotebi.com/wp-content/uploads/2014/10/squat-exercise-illustration.jpg', 
      description:['Burning calories', 'It takes only 20 mins a day']
    },
    {
      id:'2',
      title: 'Pushups',
      imageURL:'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt34035ebbc8ddd7b4/5fa3c439c1502b76a1699926/FL_1_Blog-Header-Pics_1232-x-630_V1_pushups.jpg?width=1200&height=630&fit=crop', 
      description:['Burning calories', 'It takes only 20 mins a day']
    }
  ]
  
  //static getChallenge: any;

  constructor() { }

  getChallenges(){
    return[...this.challenges]
  }
  
  getChallenge(challengeId: string){
  return{
      ...this.challenges.find(challenge => {
        return challenge.id === challengeId
      })
   }
  }

  addChallenge(title: string, imageURL:string){ 
    this.challenges.push({
      title,
      imageURL, 
      id: this.challenges.length +1 +"",
      description:[]
    })
  }

  deleteChallenge(challengeId: string){
    this.challenges= this.challenges.filter(challge=>{
      return challengeId !== challengeId  
    })
  }

}
