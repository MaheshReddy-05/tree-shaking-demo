import { Component } from '@angular/core';
import { ss } from '../public_api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [], // Add other Angular modules here if necessary
})
export class HomeComponent {
  constructor(
    private constantService: ss,
  ) {
    // Example of using services
    console.log(this.constantService);
  }
}
