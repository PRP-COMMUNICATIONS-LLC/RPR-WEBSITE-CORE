import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrandLogoComponent } from '../brand-logo.component';
import { IconComponent } from '../ui-components';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterModule, BrandLogoComponent, IconComponent],
    template: `
    <footer class="bg-black py-12 border-t border-white/10">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8">
          <app-brand-logo variant="footer" routerLink="/"></app-brand-logo>

          <div class="text-gray-400 text-sm">
            &copy; 2025 RPR Communications, LLC. All Rights Reserved.
          </div>

          <div class="flex gap-6">
            <a href="#" aria-label="Visit our website" class="text-gray-400 hover:text-rpr-cyan transition-colors"><app-icon
                name="globe" [size]="20"></app-icon></a>
            <a href="#" aria-label="Visit our LinkedIn page"
              class="text-gray-400 hover:text-rpr-cyan transition-colors">LinkedIn</a>
            <a routerLink="/" fragment="chat" aria-label="Contact us via chat"
              class="text-gray-400 hover:text-rpr-cyan transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent { }
