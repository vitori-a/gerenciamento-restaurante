import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasFormEditComponent } from './comidas-form-edit.component';

describe('ComidasFormEditComponent', () => {
  let component: ComidasFormEditComponent;
  let fixture: ComponentFixture<ComidasFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidasFormEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidasFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
