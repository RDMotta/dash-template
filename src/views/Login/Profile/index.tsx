import { useEffect, useState } from "react";

// Msal imports
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { InteractionStatus, InteractionType, InteractionRequiredAuthError, AccountInfo } from "@azure/msal-browser";

// Material-ui imports
import { loginRequest } from "../../../msal/msal-auth-config";
import { GraphData } from "./ProfileData";
import { callMsGraph } from "../../../msal/utils/MsGraphApiCall";
import { MsalAuthenticationError } from "../../../msal/MsalAuthenticationError";
import { Loading } from "../../../msal/Loading";

import { useDispatch } from "react-redux";
import { setProfile } from "../../../store/Profile/Profile.store"

const ProfileContent = () => {
    const { instance, inProgress } = useMsal();
    const [graphData, setGraphData] = useState<null|GraphData>(null);
    const dispatch = useDispatch(); 

    const internalSetGraphData = (graphData: any) => {
        setGraphData(graphData)
        const profile = fromProfile(graphData)
        dispatch(setProfile(profile))
    }

    useEffect(() => {
        if (!graphData && inProgress === InteractionStatus.None) {
            callMsGraph()
            .then((response: any) => internalSetGraphData(response))
            .catch((e: any) => {
                if (e instanceof InteractionRequiredAuthError) {
                    instance.acquireTokenRedirect({
                        ...loginRequest,
                        account: instance.getActiveAccount() as AccountInfo
                    });
                }
            });
        }
    }, [inProgress, graphData, instance]);

    return (
        <>
            { graphData ? 
              null
             : null }
        </>
    );
};

export function fromProfile(graphData: any) {
    return {                
        name: graphData?.displayName,
        email: graphData?.mail,
        avatarURL: graphData?.avatarUrl,
        occupation: graphData?.jobTitle,
        id: "",
    }
}

export function LoadingMessage() {
    return <Loading message="Carregando applicação..." />
}

export function ProfileView() {
    const authRequest = {
        ...loginRequest
    };
 
    return (
        <MsalAuthenticationTemplate 
            interactionType={InteractionType.Redirect} 
            authenticationRequest={authRequest} 
            errorComponent={MsalAuthenticationError} 
            loadingComponent={LoadingMessage}
        >
            <ProfileContent />
        </MsalAuthenticationTemplate>
      )
};