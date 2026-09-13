import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CestaService {

  produtos: any[] = [];

  adicionar(produto: any) {
    this.produtos.push(produto);
  }

  remover(codigo: number) {
    this.produtos = this.produtos.filter(
      produto => produto.codigo !== codigo
    );
  }

  total() {
    return this.produtos.reduce((total, produto) => {

      const preco = produto.promo > 0
        ? produto.promo
        : produto.valor;

      return total + preco;

    }, 0);
  }

}