import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotsUserComponent } from './nots-user.component';

describe('NotsUserComponent', () => {
  let component: NotsUserComponent;
  let fixture: ComponentFixture<NotsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotsUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
