import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PhaseType } from '../models/section_phase';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  phase: PhaseType = PhaseType.Unchecked;
  message: string = "";

  constructor(
    private router: Router
  ) { 
    this.router.events
    .pipe( filter((event) => event instanceof NavigationEnd) )
    .subscribe(() => this.reset())
  }

  reset(){
    this.phase   = PhaseType.Unchecked;
    this.message = "";
  }

  setFromError(e: HttpErrorResponse): void {
    this.phase = this.getHTTPError(e);
    this.message = this.getHTTPErrorPhaseMessage(this.phase);
  }
  
  //  Error Formatters
  getHTTPError(e: HttpErrorResponse): PhaseType {

    //  Client
    if (e.error instanceof ProgressEvent && e.status == 0) {
      return PhaseType.NoConnectivity
    }

    if (e.error instanceof ErrorEvent ) {
      return PhaseType.ClientFail;
      
    }

    //  Server
    return PhaseType.ServerFail;
  }

  getHTTPErrorPhaseMessage(phase: PhaseType): string {
    switch (phase) {
      case PhaseType.ClientFail:
        return "Client Error";

      case PhaseType.ServerFail:
        return "Server Error";

      case PhaseType.Timeout:
        return "A Timeout occured";

      case PhaseType.NoConnectivity:
        return "Unable to Connect to Server";

      default:
        return "";
    }
  }
}
