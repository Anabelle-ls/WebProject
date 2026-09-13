import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
  produtos: Produto[] = [
  {
    codigo: 1,
    nome: 'Legging Fitness Preta',
    descritivo: 'Legging de alta compressão com tecido confortável.',
    quantidade: 15,
    valor: 99.90,
    promo: 79.90,
    destaque: 1
  },
  {
    codigo: 2,
    nome: 'Top Fitness Rosa',
    descritivo: 'Top com sustentação média para treinos.',
    quantidade: 20,
    valor: 69.90,
    promo: 59.90,
    destaque: 1
  },
  {
    codigo: 3,
    nome: 'Shorts Academia Azul',
    descritivo: 'Shorts leve e confortável para exercícios.',
    quantidade: 12,
    valor: 59.90,
    promo: 0,
    destaque: 0
  },
  {
    codigo: 4,
    nome: 'Conjunto Fitness Verde',
    descritivo: 'Top e legging combinando para academia.',
    quantidade: 8,
    valor: 189.90,
    promo: 159.90,
    destaque: 1
  },
  {
    codigo: 5,
    nome: 'Camiseta Dry Fit Branca',
    descritivo: 'Camiseta com tecnologia de secagem rápida.',
    quantidade: 18,
    valor: 49.90,
    promo: 39.90,
    destaque: 0
  },
  {
    codigo: 6,
    nome: 'Regata Fitness Lilás',
    descritivo: 'Regata feminina leve e respirável.',
    quantidade: 10,
    valor: 44.90,
    promo: 0,
    destaque: 0
  },
  {
    codigo: 7,
    nome: 'Jaqueta Esportiva Preta',
    descritivo: 'Jaqueta ideal para treinos ao ar livre.',
    quantidade: 6,
    valor: 129.90,
    promo: 109.90,
    destaque: 1
  },
  {
    codigo: 8,
    nome: 'Shorts Saia Fitness',
    descritivo: 'Modelo moderno com bolso lateral.',
    quantidade: 9,
    valor: 79.90,
    promo: 69.90,
    destaque: 0
  },
  {
    codigo: 9,
    nome: 'Macacão Fitness Preto',
    descritivo: 'Peça única com excelente ajuste ao corpo.',
    quantidade: 5,
    valor: 179.90,
    promo: 149.90,
    destaque: 1
  },
  {
    codigo: 10,
    nome: 'Legging Cintura Alta Vinho',
    descritivo: 'Legging modeladora com cintura alta.',
    quantidade: 14,
    valor: 109.90,
    promo: 89.90,
    destaque: 1
  }
];
  
}
