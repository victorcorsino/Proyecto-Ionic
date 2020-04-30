import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { ChatsService } from '../servicios/chats.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(public authservice : AuthService, public chatservice : ChatsService){}

  Onlogout(){
    this.authservice.logout();
  }

  ngOnInit(){
    this.chatservice.getChatRooms().subscribe( chats => {
      chats.map( chat => {
        console.log(chat.payload.doc.data())
      })
    })
  }

}
