import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirFormComponent } from './subir-form.component';

describe('SubirFormComponent', () => {
  let component: SubirFormComponent;
  let fixture: ComponentFixture<SubirFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
