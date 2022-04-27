import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team, Coach, Player, Empty } from '../../interfaces/team.interface';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  termino: number = 0;
  team!: Team;  
   
  constructor(private _teamService: TeamService) { }

  ngOnInit(): void {    
  }

  buscar(){
    
    console.log(this.termino);
    this._teamService.getTeams(this.termino)    
    .subscribe( (result) =>{

      this.team = result.result[0];
      console.log('este:', this.team);

     

    }           

    );
      

  }

}
