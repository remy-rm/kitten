import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenComponent } from './kitten.component';

describe('KittenComponent', () => {
  let component: KittenComponent;
  let fixture: ComponentFixture<KittenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KittenComponent]
    });
    fixture = TestBed.createComponent(KittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
