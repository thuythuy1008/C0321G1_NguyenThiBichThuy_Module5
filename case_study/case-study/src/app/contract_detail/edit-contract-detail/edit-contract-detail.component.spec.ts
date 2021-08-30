import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContractDetailComponent } from './edit-contract-detail.component';

describe('EditContractDetailComponent', () => {
  let component: EditContractDetailComponent;
  let fixture: ComponentFixture<EditContractDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContractDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
