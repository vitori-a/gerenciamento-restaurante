import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosFormEditComponent } from './eventos-form-edit.component';

describe('EventosFormEditComponent', () => {
  let component: EventosFormEditComponent;
  let fixture: ComponentFixture<EventosFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
