import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  userName: string;
  passWord: number;
  myBtn: boolean = false;
  addUser: string = "no user found";
  constructor() {
    this.userName = "Ikram-akbar";
    this.passWord = 123455;
    setTimeout(() => {
      this.myBtn = true;
    }, 5000)
  }

  ngOnInit(): void {
  }
  addNewUser() {
    return this.addUser = " You have created a user " + this.updateUser;
  }
  updateUser;
  user(e:Event) {
    this.updateUser = (<HTMLInputElement>e.target).value;
  }
  
}
