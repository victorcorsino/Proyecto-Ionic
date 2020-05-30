import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

import { ChatsService } from '../../servicios/chats.service'

interface usuario {
  edad: string
  name: string
  sexo: string
  uid: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  public usuarios : any = []
 

  constructor(
    private authService: AuthService, 
    public router: Router,
    public user: ChatsService) { }

  ngOnInit() {
    

  }

  onSubmitLogin() {
    this.user.getUsers().subscribe( users =>{
      users.map( usuario => {
/*
        const data : usuario = usuario.payload.doc.data() as usuario;
        data.uid = usuario.payload.doc.id;

        this.usuarios(data);
*/
        console.log( usuario.payload.doc.data())
      })
      
    })
    this.authService.login(this.email, this.password).then( res =>{
      
      this.router.navigate(['/home']);
    }).catch(err => alert('Los datos son incorrectos o no existe el usuario'))
  }

}
