export function capitalize(term: string) {
    return term.charAt(0).toUpperCase() + term.slice(1);
}

export function textOverflow(term: string, limit: number = 100) {
    if (term.length <= limit) return term;
    return `${term.slice(0, limit)}...`;
}

export function slugize(term: string) {
    return term.toLowerCase().replace(" ", "-");
}

export function unslugize(term: string) {
    return capitalize(term).replace("-", " ");
}
export function toPascalCase(term: string) {
    if (!term.includes("-")) return term;
    return term
        .split("-")
        .map((s) => capitalize(s))
        .join("");
}

export function toCamelCase(term: string) {
    const pascalCase = toPascalCase(term);
    return pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1);
}
