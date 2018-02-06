export class AuthServiceConfig {
	// Base login url
	public	loginUrl = '';

	// Token info endpoint
	public userinfoEndpoint = '';

	// URL of the SPA to redirect the user to after login
	public redirectUri = '';

	// The OAuth Client Id
	public clientId = '';

	// set the scope for the permissions the client should request
	public scope = '';
}
