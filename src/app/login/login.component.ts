import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'vinay'
  password = 'vinay'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(private router: Router,
              private hardcodedAuthenticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // if (this.username === 'vinay' && this.password === 'vinay') {

    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      //redirect to Welcome Page
      this.router.navigate(['welcome', this.username])

      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
    console.log(this.username);
    console.log(this.password);

  }
}
