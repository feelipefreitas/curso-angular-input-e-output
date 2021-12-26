import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IncreaseValueComponent } from './increase-value/increase-value.component';

fdescribe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        IncreaseValueComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should increase the value', () => {
    spyOn(component, 'onValueIncreased');

    component.value = 5;

    fixture.detectChanges();

    const increaseValueComponent = fixture.debugElement.query(By.directive(IncreaseValueComponent)).componentInstance;

    increaseValueComponent.increase();
    // increaseValueComponent.valueIncreasedEmit.emit(increaseValueComponent.value + 1);

    expect(component.onValueIncreased).toHaveBeenCalledWith(6);
  });
});
