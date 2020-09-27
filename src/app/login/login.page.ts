import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  readonly logo = "/assets/images/mercedes-benz-logo.svg";
  readonly icon = {
    user: "/assets/images/user.svg",
    lock: "/assets/images/lock.svg",
  };
  constructor() {}

  ngOnInit() {}
}
