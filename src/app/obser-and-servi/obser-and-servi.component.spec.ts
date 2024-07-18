import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserAndServiComponent } from './obser-and-servi.component';

describe('ObserAndServiComponent', () => {
  let component: ObserAndServiComponent;
  let fixture: ComponentFixture<ObserAndServiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserAndServiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObserAndServiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
