import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstCompComponent } from './my-first-comp.component';

describe('MyFirstCompComponent', () => {
  let component: MyFirstCompComponent;
  let fixture: ComponentFixture<MyFirstCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFirstCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFirstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
