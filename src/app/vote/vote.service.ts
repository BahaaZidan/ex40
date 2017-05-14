import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Poll } from './poll.interface';

@Injectable() export class VoteService {
    private pollsUrl = '/api/polls/';
    private usersUrl = '/api/users';  // URL to web api
    constructor(private http: Http) { }
    getAllPolls():any {
        return this.http.get(this.pollsUrl)
            .map(res => res.json());
    }
    getPoll(id: string):any {
        return this.http.get(`${this.pollsUrl}${id}`)
            .map(res => res.json());
    }
    doVote(pollId: string, optionId: string):any {
        return this.http.post(`${this.pollsUrl}${pollId}/vote/${optionId}`,{})
            .map(res => res.json());
    }
    signup(username: string, password:string): any{
        return this.http.post(`${this.usersUrl}/register`,{
            "username":username,
            "password":password
        })
            .map(res => res.json());
    }
    login(username: string, password:string): any{
        return this.http.post(`${this.usersUrl}/login`,{
            "username":username,
            "password":password
        })
            .map(res => res.json());
    }
    addPoll(poll: Poll, token: string): any{
        //setting the token header
        const headers: Headers = new Headers();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');

        const options: RequestOptions = new RequestOptions();
        options.headers = headers;
        
        return this.http.post(`${this.pollsUrl}`, poll, options)
            .map(res => res.json());
    }

    editPoll(id: string, poll: Poll, token: string): any{
        //setting the token header
        const headers: Headers = new Headers();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');

        const options: RequestOptions = new RequestOptions();
        options.headers = headers;
        
        return this.http.put(`${this.pollsUrl}${id}`, poll, options)
            .map(res => res.json());
    }

    deletePoll(id: string, token: string): any{
        //setting the token header
        const headers: Headers = new Headers();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');

        const options: RequestOptions = new RequestOptions();
        options.headers = headers;
        
        return this.http.delete(`${this.pollsUrl}${id}`, options)
            .map(res => res.json());
    }
    
    getPollByUser(token: string): any{
        //setting the token header
        const headers: Headers = new Headers();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');

        const options: RequestOptions = new RequestOptions();
        options.headers = headers;
        
        return this.http.get(`${this.pollsUrl}byauthor`, options)
            .map(res => res.json());
    }
}