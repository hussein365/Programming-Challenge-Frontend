import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDataComponent } from './MasterData.component';

describe('MasterdataTaTatypComponent', () => {
  let component: MasterDataComponent;
  let fixture: ComponentFixture<MasterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
