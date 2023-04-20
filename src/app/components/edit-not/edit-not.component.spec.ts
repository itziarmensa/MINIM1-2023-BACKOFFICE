import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotComponent } from './edit-not.component';

describe('EditNotComponent', () => {
  let component: EditNotComponent;
  let fixture: ComponentFixture<EditNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
