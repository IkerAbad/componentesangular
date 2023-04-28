import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-misclientes',
  templateUrl: './misclientes.component.html',
  styleUrls: ['./misclientes.component.css']
})
export class MisclientesComponent implements OnInit {
  public cliente: Cliente = new Cliente();
  public clientes: Cliente[] = [];
  nuevoCliente: string = '';

  constructor() { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.cliente.nombre = 'Pepe';
    this.cliente.direccion = 'Duques de Nájera';
    this.clientes = [];
    this.clientes.push(new Cliente('Pepe', 'Duques de Nájera'));
  }

  addCliente() {
    if ((this.cliente.direccion != null && this.cliente.direccion != '') && (this.cliente.nombre != null && this.cliente.nombre != '')) {
      this.clientes.push(this.cliente);
      this.cliente = new Cliente();
    }
  }

  borrarCliente(h: Cliente) {
    for (var i = 0; i < this.clientes.length; i++) {
      var idheroe = this.clientes[i].nombre;
      if (idheroe == h.nombre) {
        this.clientes.splice(i, 1);
      }
    }
  }
}
