import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBoardComponent } from './crud-board.component';

describe('CrudBoardComponent', () => {
  let component: CrudBoardComponent;
  let fixture: ComponentFixture<CrudBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
