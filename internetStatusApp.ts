import { internetStatusCommand } from "./internetLibera";

export class internetStatusApp {
    private commands: { [k: string]: internetStatusCommand } = {};
  
    addCommand(key: string, command: internetStatusCommand): void {
      this.commands[key] = command;
    }
  
    subtraiCommand(key: string): void {
      this.commands[key].bloqueia();
    }
  
    somaCommand(key: string): void {
      this.commands[key].libera();
    }
  }