import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmimNavbarComponent } from './admim-navbar.component';

describe('AdmimNavbarComponent', () => {
  let component: AdmimNavbarComponent;
  let fixture: ComponentFixture<AdmimNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmimNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmimNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
