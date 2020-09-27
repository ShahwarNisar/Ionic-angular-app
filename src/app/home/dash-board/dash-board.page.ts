import { Component } from "@angular/core";

@Component({
  selector: "app-dash-board",
  templateUrl: "dash-board.page.html",
  styleUrls: ["dash-board.page.scss"],
})
export class DashBoardPage {
  readonly logo = "/assets/images/mercedes-logo.svg";
  readonly icMenu = "/assets/images/ic_menu.svg";
  readonly icUser = "/assets/images/ic_user.svg";
  readonly leftArrow = "/assets/images/left-arrow.svg";
  readonly dashboard = "/assets/images/dashboard.svg";
  readonly reporting = "/assets/images/news-admin.svg";
  readonly coach = "/assets/images/document.svg";
  readonly analytics = "/assets/images/statistics.svg";
  readonly alert = "/assets/images/alert.svg";
  readonly settings = "/assets/images/settings.svg";
  readonly next = "/assets/images/next-down.svg";
  constructor() {}
}
