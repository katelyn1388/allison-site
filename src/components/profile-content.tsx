import { useMsal } from '@azure/msal-react';
import { useState } from 'react';
import { loginRequest } from '../api/auth-config';
import { callMsGraph } from '../api/graph';
import Button from 'react-bootstrap/esm/Button';
import { ProfileData } from './profile-data';

export const ProfileContent = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    function RequestProfileData() {
        instance
            .acquireTokenSilent({
                ...loginRequest,
                account: accounts[0],
            })
            .then((response) => {
                callMsGraph(response.accessToken).then((response) => setGraphData(response));
            });
    }

    return (
        <>
            <h5 className='card-title'>Welcome {accounts[0].name}</h5>
            <br />
            {graphData ? (
                <ProfileData graphData={graphData} />
            ) : (
                <Button variant='secondary' onClick={RequestProfileData}>
                    Request Profile Information
                </Button>
            )}
        </>
    );
};
