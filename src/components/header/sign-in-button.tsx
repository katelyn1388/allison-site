import { useMsal } from '@azure/msal-react';
import { loginRequest } from '../../api/auth-config';

export const SignInButton = () => {
    const { instance } = useMsal();

    const handleLogin = (loginType: string) => {
        if (loginType === 'popup') {
            instance.loginPopup(loginRequest).catch((e) => {
                console.log(e);
            });
        } else if (loginType === 'redirect') {
            instance.loginRedirect(loginRequest).catch((e) => {
                console.log(e);
            });
        }
    };
    return (
        <button className='ml-auto btn btn-secondary me-3 mt-2' title='Sign Out' onClick={() => handleLogin('popup')}>
            Sign In
        </button>
    );
};
