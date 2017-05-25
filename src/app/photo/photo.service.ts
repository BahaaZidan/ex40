import { Injectable }    from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

//import { Photo } from './photo.interface';

@Injectable() export class PhotoService {
    private photosUrl =  '/api/photos/'; //'http://localhost:3000/api/photos/';
    private usersUrl =  '/api/users';  // URL to web api 'http://localhost:3000/api/users';
    constructor(private http: Http) { }
    getAll():any {
        return this.http.get(this.photosUrl)
            .map(res => res.json());
    }
    getOne(id: string):any {
        return this.http.get(`${this.photosUrl}${id}`)
            .map(res => res.json());
    }
    getByUser(username: string): any{
        return this.http.get(`${this.photosUrl}byauthor/${username}`)
            .map(res => res.json());
    }
    doLike(token: string, photoId: string):any {
        //setting the token header
        const headers: Headers = new Headers();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');

        const options: RequestOptions = new RequestOptions();
        options.headers = headers;

        return this.http.post(`${this.photosUrl}${photoId}/like`, {}, options)
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
    facebookLogin(): any{
        return this.http.get(`${this.usersUrl}/facebook`)
            .map(res => res.json());
    }
    edit(photoId: string, description: string, token: string): any{
        //setting the token header
        const headers: Headers = new Headers();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');

        const options: RequestOptions = new RequestOptions();
        options.headers = headers;

        return this.http.put(`${this.photosUrl}${photoId}`, {description: description}, options)
            .map(res => res.json());
    }
    add(body: any, token: string): any{
        //setting the token header
        const headers: Headers = new Headers();
        headers.append('token', token);

        const options: RequestOptions = new RequestOptions();
        options.headers = headers;

        return this.http.post(`${this.photosUrl}`, body, options)
            .map(res => res.json());
    }
    delete(photoId: string, token: string): any{
        //setting the token header
        const headers: Headers = new Headers();
        headers.append('token', token);
        headers.append('Content-Type', 'application/json');

        const options: RequestOptions = new RequestOptions();
        options.headers = headers;

        return this.http.delete(`${this.photosUrl}${photoId}`, options)
            .map(res => res.json());
    }
}