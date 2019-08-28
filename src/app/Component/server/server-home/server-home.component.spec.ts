import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerHomeComponent } from './server-home.component';

describe('ServerHomeComponent', () => {
  let component: ServerHomeComponent;
  let fixture: ComponentFixture<ServerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
