import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { Terminator2Component } from "./terminator2.component";

describe("Terminator2Component", () => {
  let component: Terminator2Component;
  let fixture: ComponentFixture<Terminator2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Terminator2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Terminator2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
