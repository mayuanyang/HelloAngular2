import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class TransactionDataService implements InMemoryDbService {
  createDb() {
    let transactions = [
     {id: '1', type: 'BPay', amount: 10, accountId : '46012345671'},
     {id: '2', type: 'BPay', amount: 11, accountId : '46012345671'},
     {id: '3', type: 'BPay', amount: 101, accountId : '46012345672'},
     {id: '4', type: 'BPay', amount: 109, accountId : '46012345672'},
     {id: '5', type: 'BPay', amount: 210, accountId : '46012345672'},
     {id: '6', type: 'BPay', amount: 310, accountId : '46012345678'},
     {id: '7', type: 'BPay', amount: 90, accountId : '46012345678'},
     {id: '8', type: 'BPay', amount: 15, accountId : '46012345678'},
     {id: '9', type: 'BPay', amount: 119, accountId : '46012345678'},
     {id: '10', type: 'BPay', amount: 40, accountId : '46012345674'},
     {id: '11', type: 'BPay', amount: 134, accountId : '46012345674'},
     {id: '12', type: 'BPay', amount: 38, accountId : '46012345674'},
     {id: '13', type: 'BPay', amount: 87, accountId : '46012345675'},
     {id: '14', type: 'BPay', amount: 77, accountId : '46012345675'},
     {id: '15', type: 'BPay', amount: 16, accountId : '46012345673'},
     {id: '16', type: 'BPay', amount: 45, accountId : '46012345676'},
     {id: '17', type: 'BPay', amount: 12, accountId : '46012345676'},
     {id: '18', type: 'BPay', amount: 34, accountId : '46012345677'},
     {id: '19', type: 'BPay', amount: 74, accountId : '46012345678'},
     {id: '20', type: 'BPay', amount: 20.5, accountId : '46012345679'},
     {id: '21', type: 'BPay', amount: 210, accountId : '46012345679'},
    ];
    return {transactions};
  }
}