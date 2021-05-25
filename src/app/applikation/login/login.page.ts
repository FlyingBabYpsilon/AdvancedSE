import { Component,NgZone,OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../adapter.services/authentication-service";
import { User } from '../../domain.shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage{
 
  slideOpthori ={
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    }
  }
  userData: any;

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ){}

    logIn(email, password) {
      this.authService.SignIn(email.value, password.value)
        .then((res) => {
          if(this.authService.isEmailVerified) {
            this.router.navigate(['tabs/landing']);          
          } else {
            window.alert('Email is not verified')
            return false;
          }
        }).catch((error) => {
          window.alert(error.message)
        })
    }



}