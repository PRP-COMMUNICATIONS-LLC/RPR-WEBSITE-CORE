import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface ChildApp {
    id: string;
    name: string;
    description: string;
    type: 'internal' | 'external';
    path?: string;
    url?: string;
    cta: string;
}

@Component({
    selector: 'app-products',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    apps: ChildApp[] = [
        {
            id: 'verify',
            name: 'RPR Verify',
            description: 'The forensic core. Validate data integrity and neutralize discrepancies.',
            type: 'external',
            url: 'https://verify.rprcomms.com',
            cta: 'Launch Engine'
        }
    ];
}
