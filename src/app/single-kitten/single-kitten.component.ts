import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Kitten } from '../models/kitten.model';
import { KittenService } from 'src/service/kitten.service';

@Component({
  selector: 'app-single-kitten',
  templateUrl: './single-kitten.component.html',
  styleUrls: ['./single-kitten.component.scss']
})
export class SingleKittenComponent implements OnInit {
  oneKitten!: Kitten 
  constructor(private route: ActivatedRoute,
              private kittenService: KittenService
    ){}
  ngOnInit(): void {
      const kittenName = this.route.snapshot.params['name']
      console.log(kittenName)
      this.oneKitten = this.kittenService.getKittenByName(kittenName)
      console.log(this.oneKitten)
  }


}
