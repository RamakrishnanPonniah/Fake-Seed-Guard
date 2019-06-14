import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedApplicationComponent } from './seed-application.component';

describe('SeedApplicationComponent', () => {
  let component: SeedApplicationComponent;
  let fixture: ComponentFixture<SeedApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
