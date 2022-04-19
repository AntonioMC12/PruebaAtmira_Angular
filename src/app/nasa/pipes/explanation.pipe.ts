import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'explanation'
})
export class ExplanationPipe implements PipeTransform {

  transform(explanation:string): string {
    return explanation.slice(0,100).concat('...');
  }

}
