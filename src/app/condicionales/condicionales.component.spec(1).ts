import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalesComponent } from './condicionales.component';

describe('CondicionalesComponent', () => {
  let component: CondicionalesComponent;
  let fixture: ComponentFixture<CondicionalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
