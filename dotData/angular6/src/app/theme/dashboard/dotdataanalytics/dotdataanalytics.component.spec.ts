import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotdataanalyticsComponent } from './dotdataanalytics.component';

describe('DotdataanalyticsComponent', () => {
  let component: DotdataanalyticsComponent;
  let fixture: ComponentFixture<DotdataanalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotdataanalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotdataanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
