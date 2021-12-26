import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increase-value',
  templateUrl: './increase-value.component.html',
  styleUrls: ['./increase-value.component.scss']
})
export class IncreaseValueComponent implements OnInit {
  @Input('value') value: number = 0;
  @Output('valueIncreasedEmit') valueIncreasedEmit: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increase() {
    this.valueIncreasedEmit.emit(this.value + 1);
  }
}
