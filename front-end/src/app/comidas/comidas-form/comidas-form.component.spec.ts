import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasFormComponent } from './comidas-form.component';

describe('ComidasFormComponent', () => {
  let component: ComidasFormComponent;
  let fixture: ComponentFixture<ComidasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidasFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComidasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
