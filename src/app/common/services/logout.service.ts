
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, catchError, map, tap } from 'rxjs';
import { endPoints } from 'src/app/common/api-layer/endpoints';
import { ApiService } from 'src/app/common/services/api/api.service';
import { LoggingService } from 'src/app/common/services/logging/logging.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { AuthTokenService } from 'src/app/common/services/auth-token/auth-token.service';
import { LoginService } from '../components/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    private apiService: ApiService,
    private authTokenService: AuthTokenService,
    private loggingService: LoggingService,
    private loginService:LoginService
    
  ) { }
  
email=''
    
logOutUser(): Observable<any> {
  // const email = this.loginService.loggedInUserEmail$
  // const jwtToken =this.authTokenService.jwtToken$.value;
  // console.log(email)email=''
  const token = localStorage.getItem('jwtToken');
  const userDetails= localStorage.getItem('userDetails');
  const username = localStorage.getItem('loggedInUserName');
  if (userDetails) { 
    try {
      const userDetail= JSON.parse(userDetails);

      // Check if the expected properties are present
        this.email = userDetail.email;
    
      
    } catch (error) {
      console.error('Error parsing user details:', error);
    }
  }
  const logoutData={
   token,
   email:this.email
  
  
  }
    let url = endPoints.baseURL + endPoints.auth + endPoints.logout;

    return this.apiService.post(url, logoutData).pipe(
      tap((response: any) => {
        if (!!response ) {
          console.log("log out successful")
        }
      }),
      catchError((errorResponse: any) => {
        if (errorResponse instanceof HttpErrorResponse) {
          // console.log("@@error", errorResponse);
          this.loggingService.log(errorResponse?.error?.error.message);
          console.log(errorResponse?.error?.error.message)
          // this.notificationService.notify(errorResponse?.error?.error.message);
        }
        return EMPTY;
      })
    );
  }
}
