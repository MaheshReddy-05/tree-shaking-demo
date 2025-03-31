// src/app/services/field-type.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FieldTypeService {
  constructor() { }

  getFieldType(fieldName: string): string {
    const fieldTypes = {
      username: 'text',
      password: 'password',
      email: 'email'
    };
    return 'text';
  }
}
