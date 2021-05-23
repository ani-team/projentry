import { useState, useEffect } from "react";

const cache: Record<string, any> = {};

// FIXME: @hardcoded @manageAccess @shareable
// eslint-disable-next-line max-params
export function useRequest<T = any>(resolver: () => Promise<T>, key: string, debounce = 300) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [debouncedLoading, setDebouncedLoading] = useState(true);
    useEffect(() => {
        if (cache[key]) return setData(cache[key]);

        setLoading(true);
        const debounceLoading = setTimeout(() => {
            setDebouncedLoading(true);
        }, debounce);

        resolver()
            .then((response) => {
                cache[key] = response;
                setData(response);
                clearTimeout(debounceLoading);
                setLoading(false);
                setDebouncedLoading(false);
            })
            .catch(() => {
                setData(null);
                clearTimeout(debounceLoading);
                setDebouncedLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    return { data, loading, debouncedLoading };
}
