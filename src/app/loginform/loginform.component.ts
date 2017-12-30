import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
 
})
export class LoginformComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit() {
  }
  loginUser(e){
    let userName = e.target.elements[0].value;
    let passWord = e.target.elements[1].value;
    if(userName == 'admin' && passWord=='admin'){
      this.router.navigate(['dashboard']);

    }
    console.log(userName,passWord);
    return false;
  }
}
