import { Observable } from "rxjs/internal/Observable";

export class SectionPhase {
    type: PhaseType;
    request: Observable<any>;

    constructor(request: Observable<any>, type: PhaseType) {
        this.request = request;
        this.type = type;
    }

    
}












export enum PhaseType {
  Unchecked, Loading, Success, Empty,
  Timeout, ServerFail, ClientFail, NoConnectivity
}