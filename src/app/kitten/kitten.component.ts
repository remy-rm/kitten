import { Component, Input } from '@angular/core';
import { Kitten } from '../models/kitten.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-kitten',
  templateUrl: './kitten.component.html',
  styleUrls: ['./kitten.component.scss'],
})
export class KittenComponent {
  @Input() oneKitten!: Kitten;

  constructor(private router: Router) {}

  onViewKitten() {
    this.router.navigateByUrl(`kitten/${this.oneKitten.name}`);
  }
  kittenAdd() {
    if (this.oneKitten.addKitten) {
      this.oneKitten.addKitten = false;
    } else {
      this.oneKitten.addKitten = true;
    }
  }
}
