import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace' //nombdre del pipe
})
export class ReplaceSpacePipe implements PipeTransform {

  transform(value: string, args:string): string {
    value = value.split(' ').join(args).toLowerCase()
    return value;
  }
}
