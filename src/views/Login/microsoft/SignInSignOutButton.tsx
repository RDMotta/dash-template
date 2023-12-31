import { useIsAuthenticated, useMsal } from "@azure/msal-react";

import { InteractionStatus } from "@azure/msal-browser";
import { SignOutButton } from "./SignOutButton";
import { SignInButton } from "./SignInButton";

const SignInSignOutButton = () => {
    const { inProgress } = useMsal();
    const isAuthenticated = useIsAuthenticated();

    if (isAuthenticated) {
        return <SignOutButton />;
    } else if (inProgress !== InteractionStatus.Startup && inProgress !== InteractionStatus.HandleRedirect) {
        // inProgress check prevents sign-in button from being displayed briefly after returning from a redirect sign-in. Processing the server response takes a render cycle or two
        return <SignInButton label="none" />;
    } else {
        return null;
    }
}

export default SignInSignOutButton;