import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMsgCompComponent } from './my-msg-comp.component';

describe('MyMsgCompComponent', () => {
  let component: MyMsgCompComponent;
  let fixture: ComponentFixture<MyMsgCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyMsgCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMsgCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
