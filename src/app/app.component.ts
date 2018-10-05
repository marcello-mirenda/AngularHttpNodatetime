import { Component, OnInit } from '@angular/core';
import { formatNumber } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { LocalDateServiceService } from './local-date-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'AngularHttpNodatetime';

    formattedLocalDate: string;
    formattedISOString: string;
    localDate = new Date(1965, 9, 13);

    constructor(private http: HttpClient, private localDateService: LocalDateServiceService) {

    }

    ngOnInit() {
        this.formattedLocalDate = this.localDate.toLocalDateISOString();
        this.formattedISOString = this.localDate.toISOString();
    }

    onClick(): void {
        this.http.post('/api/person'
            , {
                id: 1,
                name: 'pippo',
                birtDate: this.localDate.toLocalDateISOString()
            }).subscribe();
    }


}
