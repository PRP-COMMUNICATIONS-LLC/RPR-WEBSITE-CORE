import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './ui-components';
import { AuthButtonComponent } from './auth-button.component';

@Component({
    selector: 'app-mobile-nav',
    standalone: true,
    imports: [CommonModule, IconComponent, AuthButtonComponent],
    template: `
    <div class="fixed inset-0 z-[60] md:hidden">
      <!-- Backdrop -->
      <div 
        class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        (click)="close.emit()"
      ></div>
      
      <!-- Menu Content -->
      <div class="absolute top-20 left-6 right-6 bg-rpr-bg border border-white/10 rounded-2xl p-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
        <div class="flex flex-col gap-6">
          <nav class="flex flex-col gap-4">
            <a href="#foundations" (click)="close.emit()" class="text-lg font-medium text-gray-300 hover:text-rpr-cyan transition-colors flex items-center justify-between">
              METHODS
              <app-icon name="chevron-right" [size]="18" class="opacity-40"></app-icon>
            </a>
            <a href="#highlights" (click)="close.emit()" class="text-lg font-medium text-gray-300 hover:text-rpr-cyan transition-colors flex items-center justify-between">
              HIGHLIGHTS
              <app-icon name="chevron-right" [size]="18" class="opacity-40"></app-icon>
            </a>
            <a href="#overwatch" (click)="close.emit()" class="text-lg font-medium text-gray-300 hover:text-rpr-cyan transition-colors flex items-center justify-between">
              OVERWATCH
              <app-icon name="chevron-right" [size]="18" class="opacity-40"></app-icon>
            </a>
            <a href="https://verify.rprcomms.com" target="_blank" (click)="close.emit()" class="text-lg font-medium text-gray-300 hover:text-rpr-cyan transition-colors flex items-center justify-between">
              PRODUCTS
              <app-icon name="external-link" [size]="18" class="opacity-40"></app-icon>
            </a>
          </nav>
          
          <div class="h-px bg-white/10"></div>
          
          <div class="flex flex-col gap-4">
            <app-auth-button></app-auth-button>
            <button 
              (click)="talkToAi(); close.emit()" 
              class="w-full py-4 border border-rpr-cyan text-rpr-cyan font-bold rounded-lg hover:bg-rpr-cyan hover:text-black transition-all flex items-center justify-center gap-2"
            >
              <app-icon name="message-square" [size]="18"></app-icon>
              Just Ask Ollie
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
    styles: [`
    :host { display: contents; }
  `]
})
export class MobileNavComponent {
    onTalkToAi = output<void>();
    close = output<void>();

    talkToAi() {
        this.onTalkToAi.emit();
    }
}
