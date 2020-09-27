import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CoachPage } from "./coach.page";
import { ExploreContainerComponentModule } from "../../explore-container/explore-container.module";

import { CoachPageRoutingModule } from "./coach-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: "", component: CoachPage }]),
    CoachPageRoutingModule,
  ],
  declarations: [CoachPage],
})
export class CoachPageModule {}
