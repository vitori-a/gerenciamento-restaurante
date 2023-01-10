import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresFormEditComponent } from './fornecedores-form-edit.component';

describe('FornecedoresFormEditComponent', () => {
  let component: FornecedoresFormEditComponent;
  let fixture: ComponentFixture<FornecedoresFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedoresFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedoresFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
