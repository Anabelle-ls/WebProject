import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
produtos: Produto[] = [
  {
    codigo: 1,
    nome: 'Macacão Fitness Vermelho',
    descritivo: 'Macacão de alta compressão com tecido confortável.',
    quantidade: 15,
    valor: 99.90,
    promo: 79.90,
    destaque: 1
  },
  {
    codigo: 2,
    nome: 'Conjunto Top e Legging Fitness Vermelho',
    descritivo: 'Conjunto completo para treinos.',
    quantidade: 20,
    valor: 69.90,
    promo: 59.90,
    destaque: 1
  },
  {
    codigo: 3,
    nome: 'Conjunto Top Shorts Academia Lilás',
    descritivo: 'Conjunto de top e shorts para exercícios.',
    quantidade: 12,
    valor: 59.90,
    promo: 0,
    destaque: 0
  },
  {
    codigo: 4,
    nome: 'Macacão Fitness Lilás',
    descritivo: 'Macacão de alta compressão com tecido confortável.',
    quantidade: 8,
    valor: 189.90,
    promo: 159.90,
    destaque: 1
  },
  {
    codigo: 5,
    nome: 'Macacão Fitness Azul',
    descritivo: 'Macacão de alta compressão com tecido confortável.',
    quantidade: 18,
    valor: 49.90,
    promo: 39.90,
    destaque: 0
  }
  
}
