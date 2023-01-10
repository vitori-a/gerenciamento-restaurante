import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasFormEditComponent } from './bebidas-form-edit.component';

describe('BebidasFormEditComponent', () => {
  let component: BebidasFormEditComponent;
  let fixture: ComponentFixture<BebidasFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidasFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidasFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
