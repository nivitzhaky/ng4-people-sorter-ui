import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SorterTableComponent } from './sorter-table.component';

describe('SorterTableComponent', () => {
  let component: SorterTableComponent;
  let fixture: ComponentFixture<SorterTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SorterTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SorterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
