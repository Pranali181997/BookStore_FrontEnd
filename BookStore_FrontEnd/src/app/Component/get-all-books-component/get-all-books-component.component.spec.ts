import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllBooksComponentComponent } from './get-all-books-component.component';

describe('GetAllBooksComponentComponent', () => {
  let component: GetAllBooksComponentComponent;
  let fixture: ComponentFixture<GetAllBooksComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllBooksComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllBooksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
