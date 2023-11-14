import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpreviewComponent } from './testpreview.component';

describe('TestpreviewComponent', () => {
  let component: TestpreviewComponent;
  let fixture: ComponentFixture<TestpreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestpreviewComponent]
    });
    fixture = TestBed.createComponent(TestpreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
