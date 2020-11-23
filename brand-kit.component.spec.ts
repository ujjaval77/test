import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandKitComponent } from './brand-kit.component';

describe('BrandKitComponent', () => {
  let component: BrandKitComponent;
  let fixture: ComponentFixture<BrandKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
