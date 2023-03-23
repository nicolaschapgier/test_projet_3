import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassScssComponent } from './class.scss.component';

describe('ClassScssComponent', () => {
  let component: ClassScssComponent;
  let fixture: ComponentFixture<ClassScssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassScssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassScssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
