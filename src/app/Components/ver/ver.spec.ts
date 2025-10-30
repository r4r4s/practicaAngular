import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ver } from './ver';

describe('Ver', () => {
  let component: Ver;
  let fixture: ComponentFixture<Ver>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ver]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ver);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
