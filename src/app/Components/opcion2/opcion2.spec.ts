import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Opcion2 } from './opcion2';

describe('Opcion2', () => {
  let component: Opcion2;
  let fixture: ComponentFixture<Opcion2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Opcion2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Opcion2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
