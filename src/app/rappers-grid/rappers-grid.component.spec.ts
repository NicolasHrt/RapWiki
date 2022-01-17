import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappersGridComponent } from './rappers-grid.component';

describe('RappersGridComponent', () => {
  let component: RappersGridComponent;
  let fixture: ComponentFixture<RappersGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RappersGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RappersGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
