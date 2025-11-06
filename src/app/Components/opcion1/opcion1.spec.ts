import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opcion1 } from './opcion1';

describe('Opcion1', () => {
  let component: Opcion1;
  let fixture: ComponentFixture<Opcion1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opcion1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opcion1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
