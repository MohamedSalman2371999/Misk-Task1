import { NgIf } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() cartNum!: number
  isEmpty:boolean=false
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  remove():void{
    this.isEmpty=true
  }
}
