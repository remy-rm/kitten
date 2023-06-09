import { Component } from '@angular/core';
import { KittenService } from '../../service/kitten.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent {
  constructor(public kittenService :KittenService,
              private route : Router){}
  
  kitten  = this.kittenService.getKitten()
  kittenUser = this.kittenService.getKittenUser()



  routeEmpty() {
    console.log(this.route.url)
    return this.route.url === '/kitten'
  }
  routeEmptyUser(){
    return this.route.url === '/kittenUser'
  }

}

