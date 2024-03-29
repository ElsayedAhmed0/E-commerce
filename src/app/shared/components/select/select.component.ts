import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() title: string = "";
  @Input() data: any[] = [];
  @Output() selectValue = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  detectChanges(event: any) {
    this.selectValue.emit(event)
  }
}
