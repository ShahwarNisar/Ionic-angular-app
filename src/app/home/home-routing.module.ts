import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dash-board/dash-board.module").then(
            (m) => m.DashBoardPageModule
          ),
      },
      {
        path: "reporting",
        loadChildren: () =>
          import("./reporting/reporting.module").then(
            (m) => m.ReportingPageModule
          ),
      },
      {
        path: "coach",
        loadChildren: () =>
          import("../home/coach/coach.module").then((m) => m.CoachPageModule),
      },
      {
        path: "analytics",
        loadChildren: () =>
          import("../home/analytics/analytics.module").then(
            (m) => m.AnalyticsPageModule
          ),
      },
      {
        path: "alert",
        loadChildren: () =>
          import("../home/alert/alert.module").then((m) => m.AlertPageModule),
      },
      {
        path: "",
        redirectTo: "/home/dashboard",
        pathMatch: "full",
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
