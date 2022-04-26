import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TeamPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TeamPageComponent
  ]
})
export class TeamModule { }
