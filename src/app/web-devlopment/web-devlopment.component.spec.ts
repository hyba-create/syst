import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDevlopmentComponent } from './web-devlopment.component';

describe('WebDevlopmentComponent', () => {
  let component: WebDevlopmentComponent;
  let fixture: ComponentFixture<WebDevlopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebDevlopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebDevlopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
