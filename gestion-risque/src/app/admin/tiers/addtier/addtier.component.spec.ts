import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtierComponent } from './addtier.component';

describe('AddtierComponent', () => {
  let component: AddtierComponent;
  let fixture: ComponentFixture<AddtierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
