import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchjobParameterComponent } from './batchjob_parameter.component';

describe('MasterdataTaTatypComponent', () => {
  let component: BatchjobParameterComponent;
  let fixture: ComponentFixture<BatchjobParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchjobParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchjobParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
