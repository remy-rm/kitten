import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { imgValidator } from './validators/img.validator';
import { KittenService } from 'src/service/kitten.service';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent {
  constructor(private fb: FormBuilder, public kittenAdd :KittenService) { }

  lastKittenCreate = this.kittenAdd.getKittenUser()


  kittenForm = this.fb.group({
    name : ['', Validators.required],
    age : ['', Validators.required],
    races : ['', Validators.required],
    img :['',[imgValidator]]


  })
  
  onSubmit(){
    const kitten = new Kitten( this.kittenForm.value.name!,
      parseInt( this.kittenForm.value.age!),
       this.kittenForm.value.races!,
       this.kittenForm.value.img!)

    this.kittenAdd.setKittenUser(kitten)
    this.kittenForm.reset()

  }
  
}
