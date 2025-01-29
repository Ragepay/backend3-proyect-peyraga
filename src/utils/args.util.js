import { Command } from "commander";

const args = new Command();
args.option("--env <env>", "enviroment", "dev");
args.option("--persistence <persistence>", "persistence", "MongoDB");
args.option("-u <user>", "user");

args.parse();
export default args.opts();