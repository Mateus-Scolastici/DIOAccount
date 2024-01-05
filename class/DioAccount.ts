export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Voce depositou $${value}`)
    } else {
      console.log('Conta Inválida')
    }
  }

  withdraw = (value: number): void => {
    if(!this.validateStatus()){
      console.log('Conta Inválida')
    } else if(this.balance <= value){
      console.log('Saldo insuficiente')
    } else {
      this.balance -= value
      console.log(`Voce sacou $${value}`)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  getStatus = (): boolean => {
    return this.status
  }

  setBalance = (value: number): void => {
    this.balance += value
  }
}
