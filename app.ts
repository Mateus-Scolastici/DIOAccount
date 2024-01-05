import { CompanyAccount } from './class/CompanyAccount'
import { MemberAccount } from './class/MemberAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(3000)
peopleAccount.withdraw(200)
peopleAccount.getBalance()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(2000)
companyAccount.withdraw(100)
companyAccount.getBalance()

const memberAccount: MemberAccount = new MemberAccount('Admin', 30)
memberAccount.deposit(1000)
memberAccount.withdraw(300)
memberAccount.getBalance()