import { Component, Input, OnInit} from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
   
    @Input()
    rating: number = 0;
    
    starWidth!: number;
    
    ngOnInit(): void {
        this.starWidth = this.rating * 74 / 5;
    }

}