import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMapContainerComponent } from './details-map-container.component';

describe('DetailsMapContainerComponent', () => {
  let component: DetailsMapContainerComponent;
  let fixture: ComponentFixture<DetailsMapContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMapContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
