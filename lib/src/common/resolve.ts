let { resolve } = eval("require");

if (resolve.length === 1) {
  resolve = (id, options) => {
    let basedir;
    if (options && options.paths && options.paths.length === 1) {
      basedir = options.paths[0];
    }

    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("resolve").sync(id, { basedir });
  };
}

export default resolve;
