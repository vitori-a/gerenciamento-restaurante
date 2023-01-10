import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioFormEditComponent } from './usuario-form-edit.component';

describe('UsuarioFormEditComponent', () => {
  let component: UsuarioFormEditComponent;
  let fixture: ComponentFixture<UsuarioFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
