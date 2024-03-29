import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoComponent } from './promo.component';

describe('MainComponent', () => {
  let component: PromoComponent;
  let fixture: ComponentFixture<PromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
