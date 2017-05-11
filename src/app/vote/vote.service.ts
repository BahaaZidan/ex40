import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable() export class VoteService {
    private pollsUrl = 'http://localhost:3000/api/polls/';  // URL to web api
    constructor(private http: Http) { }
    getPolls():any {
        return this.http.get(this.pollsUrl)
            .map(res => res.json());
    }
}