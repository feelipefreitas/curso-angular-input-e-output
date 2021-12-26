import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseValueComponent } from './increase-value.component';

describe('IncreaseValueComponent', () => {
  let component: IncreaseValueComponent;
  let fixture: ComponentFixture<IncreaseValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
