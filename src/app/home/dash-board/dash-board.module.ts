import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DashBoardPage } from "./dash-board.page";
import { ExploreContainerComponentModule } from "../../explore-container/explore-container.module";

import { DashBoardPageRoutingModule } from "./dash-board-routing.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    DashBoardPageRoutingModule,
  ],
  declarations: [DashBoardPage],
})
export class DashBoardPageModule {}
