import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  newServerName = "";
  newUsername = "";
  allowNewName = false;
  userNameCreated = false;
  serverCreated = false;
  servers = ["TesterServer", "AnotherTester", "OneMoreServer"];
  butClicks = ["FirstClick", "SecondClick"];
  details = "Let the Big Dawg Eat";
  showDetails = false;
  counter = 0;
  newClick = "newClick!";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.newServerName);
  }

  onUpdateServerName(event: Event) {
    this.newServerName = (<HTMLInputElement>event.target).value;
  }

  onCreateUsername() {
    this.userNameCreated = true;
  }

  resetUsername() {
    this.newUsername = "";
  }

  toggleContent() {
    if (this.showDetails === true) {
      this.showDetails = false;
    } else {
      this.showDetails = true;
    }
    this.butClicks.push(this.newClick);
    // console.log(this.butClicks)
  }

  getColor(){
    console.log(this.butClicks.length)
    if (this.butClicks.length >= 5){
      return "red";
    }
    else return 'transparent'
  }




}
