
import { API_Endpoints } from "src/app/modules/core/enums/API_Endpoints";
import { PayloadActions } from "./enums/payload_actions";

export class ClientPayload {
    action: PayloadActions;
    type: API_Endpoints;
    data: any;

    constructor(action: PayloadActions, type: API_Endpoints){
        this.action = action;
        this.type   = type;
        return this;
    }

    setData(data: any): ClientPayload {
        this.data = data;
        return this;
    }
}