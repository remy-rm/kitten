import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KittenService } from '../../service/kitten.service';
import { Kitten } from '../models/kitten.model';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.scss'],
})
export class UserKittenComponent implements OnInit, OnChanges {
  kittens!: Kitten[];
  kittenUser!: Kitten[];
  currentRoute!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public kittenService: KittenService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.currentRoute = params['name'];
      this.fetchKittens();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['currentRoute']) {
      this.fetchKittens();
    }
  }

  fetchKittens() {
    this.kittens = this.kittenService.getKitten();
    this.kittenUser = this.kittenService.getKittenUser();
  }

  hasDisplayedPhotos(): boolean {
    for (let kitten of this.kittens) {
      if (kitten.addKitten) {
        return true;
      }
    }

    for (let kitten of this.kittenUser) {
      if (kitten.addKitten) {
        return true;
      }
    }

    return false;
  }

  onViewKitten(kitten: Kitten) {
    return this.router.navigateByUrl(`/kitten/${kitten.name}`);
  }
}
