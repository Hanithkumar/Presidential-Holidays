import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaduraipackageComponent } from './maduraipackage.component';

describe('MaduraipackageComponent', () => {
  let component: MaduraipackageComponent;
  let fixture: ComponentFixture<MaduraipackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaduraipackageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaduraipackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
