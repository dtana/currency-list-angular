import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  contenteditable: number = null;

  private currencyList = [
    {
      "id": 38,
      "symbol": "CAD",
      "name": "Canadian dollar"
    },
    {
      "id": 8,
      "symbol": "CZK",
      "name": "Czech koruna"
    },
    {
      "id": 37,
      "symbol": "DKK",
      "name": "Danish crone"
    },
    {
      "id": 27,
      "symbol": "EUR",
      "name": "European euro"
    },
    {
      "id": 15,
      "symbol": "NZD",
      "name": "New Zealand dollar"
    },
    {
      "id": 30,
      "symbol": "GBP",
      "name": "Pound sterling"
    },
    {
      "id": 35,
      "symbol": "RUB",
      "name": "Russian ruble"
    },
    {
      "id": 1,
      "symbol": "RSD",
      "name": "Serbian dinar"
    },
    {
      "id": 39,
      "symbol": "CHF",
      "name": "Swiss franc"
    },
    {
      "id": 2,
      "symbol": "USD",
      "name": "US Dollar"
    }
  ];

  constructor(private serverService: ServerService) {}

  onAddCurrency(name: string) {
    this.currencyList.push({
      id: this.generateId(),
      symbol: "xxx",
      name: name
    });
  }

  onSave() {
    this.serverService.storeCurrencies(this.currencyList)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

  onGet() {
    this.serverService.getCurrencies()
      .subscribe(
        (currencyList: any[]) => this.currencyList = currencyList,
        (error) => console.log(error)
      );
  }

  private generateId() {
    return Math.round(Math.random() * 100);
  }

  onUpdate(event: any, updateField: any, index: number) {
    let newText = event.target.outerText.replace(/(\r\n|\n|\r)/gm," ");

    this.currencyList[index].name = newText;
  }

  onDeleteCurrency(index: number) {
    this.currencyList.splice(index, 1);
  }
}
