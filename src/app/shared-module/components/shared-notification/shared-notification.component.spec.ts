import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedNotificationComponent } from './shared-notification.component';

describe('SharedNotificationComponent', () => {
  let component: SharedNotificationComponent;
  let fixture: ComponentFixture<SharedNotificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SharedNotificationComponent]
    });
    fixture = TestBed.createComponent(SharedNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
