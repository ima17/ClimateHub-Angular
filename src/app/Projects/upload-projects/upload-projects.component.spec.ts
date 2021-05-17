import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProjectsComponent } from './upload-projects.component';

describe('UploadProjectsComponent', () => {
  let component: UploadProjectsComponent;
  let fixture: ComponentFixture<UploadProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
