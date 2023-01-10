import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionariosFormEditComponent } from './funcionarios-form-edit.component';

describe('FuncionariosFormEditComponent', () => {
  let component: FuncionariosFormEditComponent;
  let fixture: ComponentFixture<FuncionariosFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionariosFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionariosFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
