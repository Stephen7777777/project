import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DacxiComponent } from './dacxi.component';

describe('DacxiComponent', () => {
  let component: DacxiComponent;
  let fixture: ComponentFixture<DacxiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DacxiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DacxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
