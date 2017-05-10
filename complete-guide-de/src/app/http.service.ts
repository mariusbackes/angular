import {Http, Headers, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class HttpService {
    constructor(private http: Http) { }

    sendData(user: any) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('https://ng2-de-http-ca17d.firebaseio.com/data', body, {headers: headers})
            .catch((response: Response) => {
                return Observable.throw(response.json());
            });
    }

    getData() {
        return this.http.get('https://ng2-de-http-ca17d.firebaseio.com/data.json')
            .map((response: Response) => {
                const data = response.json();
                const returnArray = [];
                for (let key in data) {
                    returnArray.push(data[key]);
                }

                return returnArray;
            });
    }
}