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

  listaClientes: Cliente[] = [
    new Cliente("Iker", "Duques de Najera"),
    new Cliente("Juan", "Murrieta"),
    new Cliente("David", "Gran Via"),
    new Cliente("Ana", "Torremuña")
  ];
  nombre: string;
  direccion: string;

  constructor() {
    this.nombre = "";
    this.direccion = "";
  }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.cliente.nombre = "11";
    this.cliente.direccion = "222";
    this.clientes = [];

  }

  addCliente() {
      this.clientes.push(this.cliente);
      this.cliente = new Cliente();
  

  }

}


