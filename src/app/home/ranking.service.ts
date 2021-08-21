import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http:HttpClient) { }
  getRanking(){
    return this.http.get("http://localhost:3000/?_limit=3")
  }
}
