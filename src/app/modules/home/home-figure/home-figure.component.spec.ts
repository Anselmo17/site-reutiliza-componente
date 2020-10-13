import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFigureComponent } from './home-figure.component';

describe('HomeFigureComponent', () => {
  let component: HomeFigureComponent;
  let fixture: ComponentFixture<HomeFigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
