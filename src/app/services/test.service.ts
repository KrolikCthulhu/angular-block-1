import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TestService {
    constructor() {}

    getCurrentTime(): string {
        const now = new Date();
        return now.toLocaleTimeString();
    }
}
