export type AliasFinderProps = {
  basePath: string;
  rootDirFiles: string[];
  packageJson: any;
};

export type Alias = {
  alias: string;
  paths: string[];
};

export type AliasFinder = (props: AliasFinderProps) => Promise<Alias[]>;
