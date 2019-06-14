import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedActivityComponent } from './seed-activity.component';

describe('SeedActivityComponent', () => {
  let component: SeedActivityComponent;
  let fixture: ComponentFixture<SeedActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
