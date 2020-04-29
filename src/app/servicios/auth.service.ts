import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { promise } from 'protractor';
import { resolve } from 'url';
import { userInfo } from 'os';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router : Router) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  } 

  logout(){
    this.AFauth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
