import { Injectable } from '@angular/core';
import { API_Endpoints } from 'src/environments/enums/api_endpoints';
import { Transaction } from '../../accounting/models/transaction';
import { Customer } from '../../customers/models/customer';
import { Ingredient } from '../../inventory/models/ingredient';
import { Medium } from '../../inventory/models/medium';
import { Medium_Checkup } from '../../inventory/models/medium_checkup';
import { Medium_Part } from '../../inventory/models/medium_part';
import { Medium_Type } from '../../inventory/models/medium_type';
import { Species } from '../../inventory/models/species';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  format(obj: any[], type: API_Endpoints): any[] {

    if (type == API_Endpoints.medium) {
      return obj.map(o => {
        let m = new Medium(o.id)
          .setSpecies(o.species)
          .setParent(o.parent)
          .setType(o.type)
          .setLocation(o.location)
          .setCreated(o.created);

        if (o.completed == null) {
          m.setCompleted(undefined)
        } else {
          m.setCompleted(o.completed)
        }

        if (o.parts.length > 0)
          m.setParts(this.format(o.parts, API_Endpoints.mediumParts))

        if (o.logs.length > 0)
          m.setCheckupLogs(this.format(o.logs, API_Endpoints.mediumCheckups))

        return m;
      });
    }

    if (type == API_Endpoints.species) {
      return obj.map(o =>
        new Species(o.id)
          .setName(o.name)
      );
    }

    if (type == API_Endpoints.mediumCheckups) {
      return obj.map(o =>
        new Medium_Checkup(o.id)
          .setCreated(o.created)
          .setStatus(o.status)
          .setFollowupAction(o.followupAction)
          .setFollowupDate(o.followupDate)
      );
    }


    if (type == API_Endpoints.mediumParts) {
      return obj.map(o =>
        new Medium_Part(o.id)
          .setIngredient(new Ingredient(o.ingredient.id).setName(o.ingredient.name))
          .setAmount(o.count, o.unit)
      );
    }

    if (type == API_Endpoints.mediumTypes) {
      return obj.map(o =>
        new Medium_Type(o.id)
          .setName(o.name)
      );
    }

    if (type == API_Endpoints.ingredients) {
      return obj.map(o =>
        new Ingredient(o.id)
          .setName(o.name)
      );
    }

    if (type == API_Endpoints.customers) {
      return obj.map(o =>
        new Customer(o.id)
          .setFirstName(o.first_name)
          .setLastName(o.last_name)
          .setEmail(o.email)
          .setPhone(o.phone)
      );
    }

    if (type == API_Endpoints.transactions) {
      return obj.map(o =>
        new Transaction(o.id, o.amount, o.description, o.created, o.oneTime)
      );
    }

    throw "Missing API Endpoint. Unable to map";
  }
}
