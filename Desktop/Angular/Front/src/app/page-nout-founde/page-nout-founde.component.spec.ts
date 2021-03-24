import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNoutFoundeComponent } from './page-nout-founde.component';

describe('PageNoutFoundeComponent', () => {
  let component: PageNoutFoundeComponent;
  let fixture: ComponentFixture<PageNoutFoundeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNoutFoundeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNoutFoundeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
