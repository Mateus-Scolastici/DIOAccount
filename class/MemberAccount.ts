import { DioAccount } from "./DioAccount";

export class MemberAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if(this.getStatus()){
            this.setBalance(value + 10)
            console.log(`Voce depositou $${value + 10}`)
          } else {
            console.log('Conta Inválida')
          }
    }
}