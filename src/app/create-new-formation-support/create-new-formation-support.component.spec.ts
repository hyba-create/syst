import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewFormationSupportComponent } from './create-new-formation-support.component';

describe('CreateNewFormationSupportComponent', () => {
  let component: CreateNewFormationSupportComponent;
  let fixture: ComponentFixture<CreateNewFormationSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNewFormationSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewFormationSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
