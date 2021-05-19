import * as chalk from "chalk";

function makeLoggerSeverity(
  loggerFunc: Function,
  severity: string,
  color: Function,
) {
  return (str: string) => {
    loggerFunc(`${color(`[${severity.toUpperCase()}]`)} ${str}`);
  };
}

export default {
  debug: makeLoggerSeverity(console.log, "debug", chalk.white.bold),
  info: makeLoggerSeverity(console.info, "info", chalk.hex("#1986ba").bold),
  warn: makeLoggerSeverity(console.warn, "warn", chalk.hex("#ff9900").bold),
  error: makeLoggerSeverity(console.error, "error", chalk.redBright.bold),
};
