import { API_Endpoints } from "../../core/services/http.service";
import { PayloadActions } from "./enums/payload_actions";

export class ClientPayload {
    action: string;
    type: API_Endpoints;
    data: any;

    constructor(action: PayloadActions, type: API_Endpoints){
        this.action = PayloadActions[action];
        this.type   = type;
        return this;
    }

    setData(data: any): ClientPayload {
        this.data = data;
        return this;
    }
}