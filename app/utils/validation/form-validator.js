import { ValidationError } from './validation-error';
import { ValidationUtils } from './validation-utils';

export class FormValidator {
  constructor(rules) {
    this.rules = rules;
    this.errors = new Map();
  }

  validate(data) {
    this.errors.clear();
    
    Object.entries(this.rules).forEach(([field, rules]) => {
      try {
        rules.forEach(rule => this.applyRule(data[field], rule, field));
      } catch (error) {
        if (error instanceof ValidationError) {
          this.errors.set(field, error.message);
        }
      }
    });

    return this.errors.size === 0;
  }

  applyRule(value, rule, field) {
    if (!rule.validate(value)) {
      throw new ValidationError(rule.message, field);
    }
  }

  getErrors() {
    return Object.fromEntries(this.errors);
  }
}