import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.css']
})
export class TeamPageComponent implements OnInit {

  termino: number = 1;

  constructor(private _teamService: TeamService) { }

  ngOnInit(): void {

    this.buscar();
  }

  buscar(){
    this._teamService.getTeams(this.termino)
    .subscribe( teams =>
      console.log(teams)

    );

  }

}
