import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdatacomponentComponent } from './formdatacomponent.component';

describe('FormdatacomponentComponent', () => {
  let component: FormdatacomponentComponent;
  let fixture: ComponentFixture<FormdatacomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormdatacomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormdatacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
