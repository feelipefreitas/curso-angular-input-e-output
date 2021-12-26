import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('should increase and emit the value', () => {
    spyOn(component.valueIncreasedEmit, 'emit');

    component.value = 5;

    const button = fixture.debugElement.query(By.css('#test_karma-increase-button'));
    button.triggerEventHandler('click', null);
    // component.increase();

    expect(component.valueIncreasedEmit.emit).toHaveBeenCalledWith(6);
  });
});
