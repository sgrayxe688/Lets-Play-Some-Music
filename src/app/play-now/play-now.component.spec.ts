import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayNowComponent } from './play-now.component';

describe('PlayNowComponent', () => {
  let component: PlayNowComponent;
  let fixture: ComponentFixture<PlayNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
