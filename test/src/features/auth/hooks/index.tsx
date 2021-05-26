...
// FIXME: @lowCoupling
import Origin from "features/origin";
...

export const useAuth = () => {
    ...
    // FIXME: @dry with XXX
    const isAuth = !!viewer;

    // FIXME: @dangerAccess
    const login = (credential: UserCredential) => {
        ...
    };
    // FIXME: @dangerAccess
    const logout = () => {
        ...
    };
};