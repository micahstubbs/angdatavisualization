import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotdataanalyticstreeComponent } from './dotdataanalyticstree.component';

describe('DotdataanalyticstreeComponent', () => {
  let component: DotdataanalyticstreeComponent;
  let fixture: ComponentFixture<DotdataanalyticstreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotdataanalyticstreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotdataanalyticstreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
