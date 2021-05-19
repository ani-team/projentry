import * as glob from "glob";
import { promisify } from "util";
import { resolveGlob } from "./resolve-glob";

const globAsync = promisify(glob);

const _difference = require("lodash/difference");

export default async function getFilePaths(
  patterns: string[],
): Promise<string[]> {
  // glob patterns
  let positives = [];
  let negatives = [];

  for (let pattern of patterns) {
    // Make a glob pattern absolute
    pattern = resolveGlob(pattern, {});

    if (pattern.charAt(0) === "!") {
      negatives = negatives.concat(await globAsync(pattern.slice(1)));
    } else {
      positives = positives.concat(await globAsync(pattern));
    }
  }

  return _difference(positives, negatives);
}
