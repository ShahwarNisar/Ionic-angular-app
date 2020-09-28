import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  readonly icUser = "/assets/images/ic_user.svg";
  readonly leftArrow = "/assets/images/left-arrow.svg";
  readonly dashboard = "/assets/images/dashboard.svg";
  readonly reporting = "/assets/images/news-admin.svg";
  readonly coach = "/assets/images/document.svg";
  readonly analytics = "/assets/images/statistics.svg";
  readonly alert = "/assets/images/alert.svg";
  readonly settings = "/assets/images/settings.svg";
  readonly next = "/assets/images/next-down.svg";
  readonly tabs = [
    {
      name: "DashBoard",
      icon: "/assets/images/dashboard-active.svg",
      redirect: "dashboard",
    },
    {
      name: "Reporting",
      icon: "/assets/images/news-admin.svg",
      redirect: "reporting",
    },
    {
      name: "Coach",
      icon: "/assets/images/document.svg",
      redirect: "coach",
    },
    {
      name: "Analytics",
      icon: "/assets/images/statistics.svg",
      redirect: "analytics",
    },
    {
      name: "Alert",
      icon: "/assets/images/alert.svg",
      redirect: "alert",
    },
  ];
  constructor() {}
}
