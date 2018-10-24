import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCloudComponent } from './day-cloud.component';

describe('DayCloudComponent', () => {
  let component: DayCloudComponent;
  let fixture: ComponentFixture<DayCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
