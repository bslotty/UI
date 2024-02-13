import { BehaviorSubject, Observable } from "rxjs";
import { API_Endpoints } from "../../../../environments/enums/api_endpoints";
import { PhaseType } from "./section_phase";



/*
    Wrapper for data lists that adds type, and phase, with errors
*/
export class DataList {
    type: API_Endpoints;
    phase: BehaviorSubject<PhaseType>;
    private list: BehaviorSubject<any[]>;

    constructor(type: API_Endpoints, list: BehaviorSubject<any[]>){
        this.type = type;
        this.list = list;

        // this.phase.next(PhaseType.Loading);
    }

    getList(): Observable<any[]>{
        return this.list.asObservable();
    }

    setPhase(phase: PhaseType): DataList {
        this.phase.next(phase);
        return this;
    }
}