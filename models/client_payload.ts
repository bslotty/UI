
import { API_Endpoints } from "../../core/enums/api_endpoints";
import { PayloadActions } from "./enums/payload_actions";

export class ClientPayload {
    action: string;
    type: string;
    data: any;

    constructor(action: PayloadActions, type: API_Endpoints){
        this.action = PayloadActions[action];
        this.type   = API_Endpoints[type];
        return this;
    }

    setData(data: any): ClientPayload {
        this.data = data;
        return this;
    }
}