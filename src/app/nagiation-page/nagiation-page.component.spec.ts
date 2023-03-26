import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagiationPageComponent } from './nagiation-page.component';

describe('NagiationPageComponent', () => {
  let component: NagiationPageComponent;
  let fixture: ComponentFixture<NagiationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagiationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NagiationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
