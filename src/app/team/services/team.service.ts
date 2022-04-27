import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empty, Team } from '../interfaces/team.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private apiUrl: string = 'https://apiv2.allsportsapi.com/football/';

  apiKey: string = '55a214ed0bade34db440fab73eff1115bd32a68b47d79d6f855b6c14463c61e7';

  constructor(private http: HttpClient) { }


  getTeams(codigo: number): Observable<any>{

    const url = `${this.apiUrl}?&met=Teams&teamId=${codigo}&APIkey=${this.apiKey}`;
     return this.http.get<any>(url);
     

  }

 
}
