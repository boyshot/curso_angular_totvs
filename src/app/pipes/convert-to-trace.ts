import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToTrace'
})

export class convertToTracePipe implements PipeTransform {
    
    transform(value: string, caracter: string) {
      return value.replace(caracter, '-');
    }
}