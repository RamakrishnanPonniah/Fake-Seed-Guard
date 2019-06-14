import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeedHomeComponent } from './seed-home.component';

describe('SeedHomeComponent', () => {
  let component: SeedHomeComponent;
  let fixture: ComponentFixture<SeedHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeedHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeedHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
