import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Terminator1Component } from "./terminator1.component";

describe("Terminator1Component", () => {
  let component: Terminator1Component;
  let fixture: ComponentFixture<Terminator1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Terminator1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Terminator1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
