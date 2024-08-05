import { CompanyAccount } from "./class/CompanyAccount";
import { DioAccount } from "./class/DioAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const conta: PeopleAccount = new PeopleAccount(5, "Duduzinho", 32);

conta.deposit(32);
conta.withdraw(2);

const conta3: CompanyAccount = new CompanyAccount("paulo", 43);
conta3.deposit(4343);
conta3.getLoan(4345);
