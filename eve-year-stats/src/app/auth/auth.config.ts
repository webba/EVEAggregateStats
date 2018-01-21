import { AuthServiceConfig } from './auth.service.config';

export const authServiceConfig: AuthServiceConfig = {
    loginUrl: 'https://login.eveonline.com/oauth/authorize',

    // Token info endpoint
    userinfoEndpoint: 'https://esi.tech.ccp.is/verify/',

    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/oauth-callback',

    // The OAuth Client Id
    clientId: '8f8193a042af4162b0083a65e5164af0',

    // set the scope for the permissions the client should request
    scope: 'esi-characterstats.read.v1'
};
