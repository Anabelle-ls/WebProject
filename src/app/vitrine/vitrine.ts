import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { CestaService } from '../cesta/cesta.service';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {

  constructor(
    private cestaService: CestaService
  ) {}

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
      valor: 149.90,
      promo: 119.90,
      destaque: 1
    },

    {
      codigo: 3,
      nome: 'Conjunto Top Shorts Academia Lilás',
      descritivo: 'Conjunto de top e shorts para exercícios.',
      quantidade: 12,
      valor: 99.90,
      promo: 0,
      destaque: 0
    },

    {
      codigo: 4,
      nome: 'Macacão Fitness Lilás',
      descritivo: 'Macacão de alta compressão com tecido confortável.',
      quantidade: 8,
      valor: 109.90,
      promo: 89.90,
      destaque: 1
    },

    {
      codigo: 5,
      nome: 'Macacão Fitness Azul',
      descritivo: 'Macacão de alta compressão com tecido confortável.',
      quantidade: 18,
      valor: 99.90,
      promo: 79.90,
      destaque: 0
    },

    {
      codigo: 6,
      nome: 'Conjunto Top e Legging Fitness Azul',
      descritivo: 'Conjunto completo para treinos.',
      quantidade: 10,
      valor: 159.90,
      promo: 0,
      destaque: 0
    },

    {
      codigo: 7,
      nome: 'Macacão Fitness Verde',
      descritivo: 'Macacão de alta compressão com tecido confortável.',
      quantidade: 6,
      valor: 89.90,
      promo: 69.90,
      destaque: 1
    },

    {
      codigo: 8,
      nome: 'Conjunto Top e Legging Fitness Verde',
      descritivo: 'Modelo moderno.',
      quantidade: 9,
      valor: 129.90,
      promo: 99.90,
      destaque: 0
    },

    {
      codigo: 9,
      nome: 'Macacão Fitness Marrom',
      descritivo: 'Peça única com excelente ajuste ao corpo.',
      quantidade: 5,
      valor: 79.90,
      promo: 69.90,
      destaque: 1
    },

    {
      codigo: 10,
      nome: 'Conjunto Top e Shorts Fitness Marrom',
      descritivo: 'Shorts modeladora com cintura alta.',
      quantidade: 14,
      valor: 89.90,
      promo: 79.90,
      destaque: 1
    }

  ];

  adicionarCesta(produto: Produto): void {

    this.cestaService.adicionar(produto);

    alert('Produto adicionado à cesta!');

  }

}