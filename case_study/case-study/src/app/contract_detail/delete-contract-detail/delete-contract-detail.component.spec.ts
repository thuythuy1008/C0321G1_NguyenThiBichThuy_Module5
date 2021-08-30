import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteContractDetailComponent } from './delete-contract-detail.component';

describe('DeleteContractDetailComponent', () => {
  let component: DeleteContractDetailComponent;
  let fixture: ComponentFixture<DeleteContractDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteContractDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
