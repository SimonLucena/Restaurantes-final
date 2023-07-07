import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemRestauranteComponent } from './listagem-restaurante.component';

describe('ListagemRestauranteComponent', () => {
  let component: ListagemRestauranteComponent;
  let fixture: ComponentFixture<ListagemRestauranteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemRestauranteComponent]
    });
    fixture = TestBed.createComponent(ListagemRestauranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
