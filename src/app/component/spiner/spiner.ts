import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spiner',
  imports: [],
  templateUrl: './spiner.html',
  styleUrl: './spiner.scss'
})
export class Spiner {
  @Input() isLoading: boolean = false;
}
