import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementerComponent } from './incrementer.component';

describe('IncrementerComponent', () => {
  let component: IncrementerComponent;
  let fixture: ComponentFixture<IncrementerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncrementerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncrementerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
