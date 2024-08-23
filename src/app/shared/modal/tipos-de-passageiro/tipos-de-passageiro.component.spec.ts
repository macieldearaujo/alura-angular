import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposDePassageiroComponent } from './tipos-de-passageiro.component';

describe('TiposDePassageiroComponent', () => {
  let component: TiposDePassageiroComponent;
  let fixture: ComponentFixture<TiposDePassageiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TiposDePassageiroComponent]
    });
    fixture = TestBed.createComponent(TiposDePassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
