import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
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
