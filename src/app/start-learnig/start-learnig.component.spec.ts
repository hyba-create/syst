import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLearnigComponent } from './start-learnig.component';

describe('StartLearnigComponent', () => {
  let component: StartLearnigComponent;
  let fixture: ComponentFixture<StartLearnigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartLearnigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartLearnigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
