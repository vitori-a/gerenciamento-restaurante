import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentosFormEditComponent } from './agendamentos-form-edit.component';

describe('AgendamentosFormEditComponent', () => {
  let component: AgendamentosFormEditComponent;
  let fixture: ComponentFixture<AgendamentosFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendamentosFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentosFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
