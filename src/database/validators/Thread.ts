import {
  ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments
} from 'class-validator';
import { Thread } from '../entities/Thread';

@ValidatorConstraint({ name: 'ThreadText', async: false })
export class ThreadText implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    const object = args.object as Thread;
    if (object.parent) {
      // Must contains operator and number
      return /^[\+|\-|\*|\/]\d+$/.test(value);
    }
    // Must contains only number
    return /^\d+$/.test(value);
  }

  defaultMessage() {
    return 'Invalid text';
  }
}
