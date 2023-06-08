import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleKittenComponent } from './single-kitten.component';

describe('SingleKittenComponent', () => {
  let component: SingleKittenComponent;
  let fixture: ComponentFixture<SingleKittenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleKittenComponent]
    });
    fixture = TestBed.createComponent(SingleKittenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
