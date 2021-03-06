import * as path from "path";

// Make a glob pattern absolute
export function resolveGlob(glob, options: { base?: string } | undefined) {
  const base = options.base ? path.resolve(options.base) : process.cwd();

  // Store first and last characters before glob is modified
  const prefix = glob.charAt(0);
  const suffix = glob.slice(-1);
  const isNegative = prefix === "!";

  if (isNegative) {
    glob = glob.slice(1);
  }

  if (glob.charAt(0) !== "/") {
    glob = path.resolve(base, glob);
  }

  if (suffix === "/" && glob.slice(-1) !== "/") {
    glob += "/";
  }

  return isNegative ? "!" + glob : glob;
}
