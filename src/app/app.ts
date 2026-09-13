import { Component, signal } from '@angular/core';
<<<<<<< HEAD
import { RouterOutlet,RouterLink } from '@angular/router';
=======
import { RouterLink, RouterOutlet } from '@angular/router';
>>>>>>> 7324f583a7e33014c218b565437a7f6aa3d18674

@Component({
  imports: [RouterOutlet, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('web06');
}
