import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevolverComponent } from './revolver.component';

describe('RevolverComponent', () => {
  let component: RevolverComponent;
  let fixture: ComponentFixture<RevolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevolverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
