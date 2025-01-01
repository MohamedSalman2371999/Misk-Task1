import { NgIf } from '@angular/common';
import { Component, inject, Input, input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  private readonly _ToastrService = inject(ToastrService)
  @Input() cartNum!: number
  isEmpty:boolean=false
  isMenuOpen = false;
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  remove():void{
    this.isEmpty=true
    this._ToastrService.error("Item deleted")

  }
}
