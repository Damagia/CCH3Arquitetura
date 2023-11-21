import { internetStatus } from "./internetStatus";

export class internetCommand {
    constructor(private readonly status: internetStatus) {}

    libera(): void {
        this.status.somaMensalidade();
      }
    
    bloqueia(): void {
        this.status.subtraiMensalidade();
    }
}