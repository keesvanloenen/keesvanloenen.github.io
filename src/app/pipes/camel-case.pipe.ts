import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'camelcase', pure: true })
export class CamelCasePipe implements PipeTransform {

  transform(value: any) {
    if (!value) {
      return '';
    }
    
    const words = value.split(' ');
    let output= '';

    for (const word of words) {
      if (!word) continue;
      output += word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    output = output[0].toLowerCase() + output.slice(1);
    return output;
  }
}