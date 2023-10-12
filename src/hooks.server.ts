import { SvelteKitAuth, Providers } from "sk-auth"
import * as Bindings from '@nebhale/service-bindings';
import type { OAuth2Provider } from "sk-auth/dist/providers";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {    
  
  
    const response = await resolve(event);
  
    return response;
  };

export const appAuth = new SvelteKitAuth({

    providers: [await authInfo()],
    callbacks: {
        jwt(token, profile) {
            if (profile?.provider) {
                const { provider, ...account } = profile;
                token = {
                    ...token,
                    user: {
                        ...(token.user ?? {}),
                        connections: { ...(token.user?.connections ?? {}), [provider]: account },
                    },
                };
            }

            return token;
        },
    },
    jwtSecret: import.meta.env.VITE_JWT_SECRET_KEY,
})



async function authInfo(): Promise<OAuth2Provider> {
    let ob = null;
    if (process.env.SERVICE_BINDING_ROOT) {


        const b = await Bindings.fromServiceBindingRoot();
        ob = await Bindings.find(b, "sso-claim");
        const authConfig = {
        grantTypes: await Bindings.get(ob!, 'authorization-grant-types'),
        authMethod: await Bindings.get(ob!, 'client-authentication-method'),
        clientId: await Bindings.get(ob!, 'client-id'),
        clientSecret: await Bindings.get(ob!, 'client-secret'),
        redirect: await Bindings.get(ob!, 'issuer-uri'),
        scope: await Bindings.get(ob!, 'scope'),
        type: await Bindings.get(ob!, 'type'),
        id: 'test-app'
    };

    console.log(authConfig);

    const oauthProvider = new Providers.OAuth2Provider(authConfig);
    return oauthProvider;
    }

    return null;
}






