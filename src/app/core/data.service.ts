import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map, catchError} from "rxjs/operators";


@Injectable()
export class DataService {

  baseUrl: string = "assets/";

  constructor(private HttpClient) {
  }

  private handleError(error: any) {
    console.error("server error: ", error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || "Node.js server error");
  }
}
