import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventurePackageComponent } from './adventure-package.component';

describe('AdventurePackageComponent', () => {
  let component: AdventurePackageComponent;
  let fixture: ComponentFixture<AdventurePackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventurePackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventurePackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
