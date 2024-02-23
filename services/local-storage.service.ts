import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocalStorageService {
  public key: string;

  constructor() {}

  valid(): boolean {
    return this.key != undefined;
  }

  store(data: any[]) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }

  get(): any[] {
    if (!this.valid) throw "LocalStorage not setup";
    return JSON.parse(localStorage.getItem(this.key));
  }

  insert(data: any) {
    if (!this.valid) throw "LocalStorage not setup";
    data.id = data.id.replace("create_", "");

    let list = JSON.parse(localStorage.getItem(this.key));
    if (list == undefined) {
      list = [data];
    } else if (list.map((i) => i.id).indexOf(data.id) == -1) {
      list.push(data);
    }

    this.store(list);
  }

  update(data: any) {
    if (!this.valid) throw "LocalStorage not setup";
    let list = JSON.parse(localStorage.getItem(this.key));
    let index = list.findIndex((i) => i.id == data.id);
    list[index] = data;
    this.store(list);
  }

  delete(data: any) {
    if (!this.valid) throw "LocalStorage not setup";
    let list = JSON.parse(localStorage.getItem(this.key));
    let index = list.findIndex((i) => i.id == data.id);
    list.splice(index, 1);
    this.store(list);
  }
}
