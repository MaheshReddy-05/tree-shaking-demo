// src/app/services/utils.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }

  calculateSum(a: number, b: number): number {
    return a + b;
  }
}
