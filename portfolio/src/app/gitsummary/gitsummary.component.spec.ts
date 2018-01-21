import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitsummaryComponent } from './gitsummary.component';

describe('GitsummaryComponent', () => {
  let component: GitsummaryComponent;
  let fixture: ComponentFixture<GitsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
