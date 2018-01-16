import { PipeTransform, Pipe } from "@angular/core";
import { Component } from "@angular/core/src/metadata/directives";

@Pipe({
    name : 'convertToSpaces'
})

export class ConvertToSpaces implements PipeTransform{
    transform(value: string , character : string) :string{
        return value.replace(character , ' ');        
    }
    

}