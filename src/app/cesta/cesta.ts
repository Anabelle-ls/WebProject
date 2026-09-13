import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from './cesta.service';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  templateUrl: './cesta.html',
  styleUrl: './cesta.css'
})
export class Cesta {

  constructor(
    public cestaService: CestaService
  ) {}

}