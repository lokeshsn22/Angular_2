import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'ai-star',
    moduleId: module.id,
    templateUrl: 'star.component.html',
    styleUrls: ['star.component.css']
}) 

export class StarComponent implements OnChanges{
         @Input() rating: number;
         startWidth: number;
         ratingClicked: EventEmitter<string> =
                     new EventEmitter<string>();
         ngOnChanges(): void{
             this.startWidth = this.rating*86/5;
         }

         onClick(): void(){
             this.ratingClicked.emit(`the rating ${this.rating} has been clicked`);
         }
}       