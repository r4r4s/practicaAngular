import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Miaplicacion } from './miaplicacion';

describe('Miaplicacion', () => {
  let component: Miaplicacion;
  let fixture: ComponentFixture<Miaplicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Miaplicacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Miaplicacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
