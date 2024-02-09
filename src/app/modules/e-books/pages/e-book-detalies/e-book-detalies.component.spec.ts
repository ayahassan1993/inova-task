import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBookDetaliesComponent } from './e-book-detalies.component';

describe('EBookDetaliesComponent', () => {
  let component: EBookDetaliesComponent;
  let fixture: ComponentFixture<EBookDetaliesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EBookDetaliesComponent]
    });
    fixture = TestBed.createComponent(EBookDetaliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
