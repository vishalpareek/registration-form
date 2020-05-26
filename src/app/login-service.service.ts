import { Injectable } from '@angular/core';
import { Observable, of ,throwError} from 'rxjs';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }
  private registerUrl = 'https://reqres.in/api/users';
  private loginUrl = 'https://reqres.in/api/login';
  userData : any = {
  					Title : "Mr.",
  				  	FirstName : "Vishal",
  				  	LastName : "Pareek",
  				  	DOB: new Date(),
  				  	PhoneNumber:"01730794190",
  				  	Email:"vishal.pareek@abc.com"
  				 };

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

	/** POST: add a new hero to the server */
	registerUser(user: any): Observable<any> {
	  return this.http.post<any>(this.registerUrl, user, this.httpOptions).pipe(
	    tap((newUser: any) => console.log(`added hero w/ id=${newUser.id}`)),
	    catchError(this.handleError)
	  );
	}

	loginUser(userdata: any): Observable<any> {
	  return this.http.post<any>(this.loginUrl, userdata, this.httpOptions).pipe(
	    tap((user: any) => console.log(`user moved to user route`)),
	    catchError(this.handleError)
	  );
	}

	private handleError(error: HttpErrorResponse) {
	  if (error.error instanceof ErrorEvent) {
	    console.log('An error occurred:', error.error.message);
	  } else {
	    console.error(
	      `Backend returned code ${error.status}, ` +
	      `body was: ${error.error}`);
	  }
	  return throwError(
		    'Something bad happened; please try again later.');
		};
}
