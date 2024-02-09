import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBooksListComponent } from './e-books-list.component';

describe('EBooksListComponent', () => {
  let component: EBooksListComponent;
  let fixture: ComponentFixture<EBooksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EBooksListComponent]
    });
    fixture = TestBed.createComponent(EBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
