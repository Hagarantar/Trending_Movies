import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {
 
  transform(biography:string , count:number):string {
      return biography.split(" ").slice(0,count).join(" ") ;
  }
 
  
}
