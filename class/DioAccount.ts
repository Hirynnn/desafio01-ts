export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance += valor;
      console.log("Valor atual: " + this.balance);
    }
  };

  withdraw = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance -= valor;
      console.log("Valor atual: " + this.balance);
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
