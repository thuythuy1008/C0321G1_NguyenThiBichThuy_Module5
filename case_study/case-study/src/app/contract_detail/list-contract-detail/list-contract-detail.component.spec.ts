import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContractDetailComponent } from './list-contract-detail.component';

describe('ListContractDetailComponent', () => {
  let component: ListContractDetailComponent;
  let fixture: ComponentFixture<ListContractDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContractDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContractDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
