import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ExploreContainerComponent } from "./explore-container.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatGridListModule,
    RouterModule,
  ],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent, RouterModule],
})
export class ExploreContainerComponentModule {}
