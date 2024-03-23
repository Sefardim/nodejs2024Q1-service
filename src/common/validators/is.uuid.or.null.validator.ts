import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
  ValidationOptions,
} from 'class-validator';
import { validate as uuidValidate } from 'uuid';

@ValidatorConstraint({ name: 'IsUuidOrNull', async: false })
export class IsUuidOrNullConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    if (typeof value === 'string') {
      return uuidValidate(value);
    }
    return value === null;
  }

  defaultMessage() {
    return '$property must be a valid uuid or null';
  }
}

export function IsUuidOrNull(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'IsUuidOrNull',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsUuidOrNullConstraint,
    });
  };
}
