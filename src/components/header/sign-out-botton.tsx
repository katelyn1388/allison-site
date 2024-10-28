import { useMsal } from '@azure/msal-react';

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType: string) => {
        if (logoutType === 'popup') {
            instance.logoutPopup({
                postLogoutRedirectUri: '/',
                mainWindowRedirectUri: '/',
            });
        } else if (logoutType === 'redirect') {
            instance.logoutRedirect({
                postLogoutRedirectUri: '/',
            });
        }
    };

    return (
        <button className='ml-auto btn btn-secondary me-3 mt-2' title='Sign Out' onClick={() => handleLogout('popup')}>
            Sign Out
        </button>
    );
};
