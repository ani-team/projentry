import { useState, useEffect } from "react";

// FIXME: @hardcoded @manageAccess @shareable
// eslint-disable-next-line max-params
export function useRequest<T = any>(resolver: () => Promise<T>, key: string, debounce = 300) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const debounceLoading = setTimeout(() => {
            setLoading(true);
        }, debounce);

        resolver()
            .then((response) => {
                setData(response);
                clearTimeout(debounceLoading);
                setLoading(false);
            })
            .catch(() => {
                setData(null);
                clearTimeout(debounceLoading);
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    return { data, loading };
}
