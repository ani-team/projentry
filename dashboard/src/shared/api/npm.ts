export const getPackage = (dependencyName: string) => {
    const dependencyURI = encodeURIComponent(dependencyName);
    return fetch(`https://api.npms.io/v2/package/${dependencyURI}`).then((r) => r.json());
};

export type PackageUser = {
    name?: string;
    email?: string;
    username?: string;
};

export type PackageResponse = {
    analyzedAt: string;
    collected: {
        metadata: {
            name: string;
            version: string;
            description: string;
            keywords: string[];
            date: string;
            author: PackageUser;
            publisher: PackageUser;
            maintainers: PackageUser[];
            links: {
                npm: string;
                homepage?: string;
                repository?: string;
                bugs?: string;
            };
            license: string;
            readme?: string;
        };
    };
};
