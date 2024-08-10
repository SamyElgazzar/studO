import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdssComponent } from './sdss.component';

describe('SdssComponent', () => {
  let component: SdssComponent;
  let fixture: ComponentFixture<SdssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SdssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SdssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
