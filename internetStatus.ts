export class internetStatus {
    private status = true;
    private mensalidades = 0;
  
    constructor(public name: string) {}
  
    getStatus(): string {
        return this.status ? 'Liberado' : 'Bloqueado';
    }
  
    somaMensalidade(): boolean {
        this.mensalidades += 1;
        if (this.mensalidades >= 2){
            this.status = false;
        }
        console.log(`${this.name} possui ${this.mensalidades} fatura(s) vencidas(s), seu plano de internet atualmente está ${this.getStatus()}`);
        return this.status;
    }
  
    subtraiMensalidade(): boolean {
        if (this.mensalidades <=0){
            console.log(`${this.name} possui ${this.mensalidades} fatura(s) vencidas(s), seu plano de internet atualmente está ${this.getStatus()}`);
            return this.status;
        }

        this.mensalidades -= 1;
        if (this.mensalidades < 2){
            this.status = true;
        }
        console.log(`${this.name} possui ${this.mensalidades} fatura(s) vencidas(s), seu plano de internet atualmente está ${this.getStatus()}`);
        return this.status;
    }
  }