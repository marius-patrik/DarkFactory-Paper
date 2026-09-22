# GitHub authentication

The workbench is a static browser application. Public repositories remain available without authentication.

Authenticated workflows use the GitHub App web authorization flow with PKCE. The browser bundle receives only:

- `PUBLIC_GITHUB_OAUTH_CLIENT_ID` — the GitHub App client ID;
- `PUBLIC_GITHUB_AUTH_BROKER_URL` — an HTTPS token-exchange endpoint.

The broker is the only secret-bearing component. It accepts a JSON POST containing:

```json
{
  "provider": "github",
  "code": "<authorization code>",
  "codeVerifier": "<PKCE verifier>",
  "redirectUri": "<exact Pages callback URL>"
}
```

It exchanges that code with GitHub using the configured GitHub App client ID and client secret and returns JSON containing `access_token` (or `token`) and, when applicable, `expires_in`.

The broker must:

- allow CORS only from the deployed workbench origin(s);
- accept POST only;
- validate `provider === "github"`;
- use the exact supplied redirect URI in the GitHub exchange;
- keep the client secret server-side;
- never log authorization codes, access tokens, refresh tokens, or client secrets;
- return no persistent browser cookie;
- rate-limit abusive exchange attempts.

The browser validates OAuth `state`, keeps the PKCE verifier and resulting access token in `sessionStorage`, validates the token through the GitHub API, handles denial/expiry/error states, and clears session credentials on sign-out.

GitHub device flow is intentionally not used by the Pages application. GitHub documents device flow for headless clients, while browser applications use the web authorization flow; browser-side device flow is also prevented by CORS in web-worker clients.
