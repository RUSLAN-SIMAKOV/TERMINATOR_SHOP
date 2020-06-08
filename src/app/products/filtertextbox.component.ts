import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";

@Component({
  selector: "app-filter-textbox",
  template: `
    Filter: <input type="text" [ngModel]=""/> `
})

export class FiltertextboxComponent implements OnInit {

  private filterField: string;

  @Input() get filter(){
    return this.filterField;
  }

  set filter(value: string){
    this.filterField = value;
    this.changed.emit(this.filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }
}
