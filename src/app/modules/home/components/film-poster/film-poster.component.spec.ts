import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPosterComponent } from './film-poster.component';

describe('FilmPosterComponent', () => {
  let component: FilmPosterComponent;
  let fixture: ComponentFixture<FilmPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmPosterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
