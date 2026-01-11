import { Component, signal, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrandLogoComponent } from '../brand-logo.component';
import { IconComponent } from '../ui-components';
import { AuthButtonComponent } from '../auth-button.component';
import { MobileNavComponent } from '../mobile-nav.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule, BrandLogoComponent, IconComponent, AuthButtonComponent, MobileNavComponent],
    template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-rpr-bg/90 backdrop-blur-md border-b border-white/10">
      <div class="container mx-auto px-6 h-20 flex items-center justify-between">
        <app-brand-logo variant="header" routerLink="/"></app-brand-logo>

        <div class="hidden md:flex items-center gap-8">
          <a routerLink="/" fragment="foundations" class="text-sm font-medium text-gray-300 hover:text-rpr-cyan transition-colors">METHODS</a>
          <a routerLink="/" fragment="highlights" class="text-sm font-medium text-gray-300 hover:text-rpr-cyan transition-colors">HIGHLIGHTS</a>
          <a routerLink="/" fragment="overwatch" class="text-sm font-medium text-gray-300 hover:text-rpr-cyan transition-colors">OVERWATCH</a>
          <a routerLink="/products" routerLinkActive="text-red-600" class="text-sm font-medium text-gray-300 hover:text-rpr-cyan transition-colors">PRODUCTS</a>
          <app-auth-button></app-auth-button>
          <button (click)="onTalkToAi.emit()"
            class="px-4 py-2 border border-rpr-cyan text-rpr-cyan text-sm font-bold rounded hover:bg-rpr-cyan hover:text-black transition-all">
            Just Ask Ollie
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white" (click)="toggleMobileMenu()">
          <app-icon [name]="isMobileMenuOpen() ? 'x' : 'menu'"></app-icon>
        </button>
      </div>

      @if (isMobileMenuOpen()) {
        <app-mobile-nav (close)="toggleMobileMenu()" (onTalkToAi)="onTalkToAi.emit()"></app-mobile-nav>
      }
    </nav>
  `
})
export class HeaderComponent {
    isMobileMenuOpen = signal(false);
    @Output() onTalkToAi = new EventEmitter<void>();

    toggleMobileMenu() {
        this.isMobileMenuOpen.update(v => !v);
    }
}
