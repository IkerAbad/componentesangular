import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisclientesComponent } from './misclientes.component';

describe('MisclientesComponent', () => {
  let component: MisclientesComponent;
  let fixture: ComponentFixture<MisclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisclientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
