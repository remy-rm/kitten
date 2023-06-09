import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Kitten } from '../models/kitten.model';
import { KittenService } from 'src/service/kitten.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-kitten',
  templateUrl: './single-kitten.component.html',
  styleUrls: ['./single-kitten.component.scss'],
})
export class SingleKittenComponent implements OnInit, OnDestroy {
  oneKitten!: Kitten;
  private routeSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private kittenService: KittenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const kittenName = this.route.snapshot.params['name'];
    this.oneKitten = this.kittenService.getKittenByName(kittenName);

    this.routeSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const newKittenName = params.get('name');
        this.oneKitten = this.kittenService.getKittenByName(newKittenName!);
      }
    );
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  kittenAdd() {
    this.oneKitten.addKitten = !this.oneKitten.addKitten;
    console.log(this.oneKitten.addKitten);
  }
}
