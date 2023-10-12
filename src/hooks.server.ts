import { SvelteKitAuth, Providers } from "sk-auth"
import * as Bindings from '@nebhale/service-bindings';
import type { OAuth2Provider } from "sk-auth/dist/providers";

export const handle = new SvelteKitAuth({
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
    console.log("using @nebhale/service-bindings");
    let b = await Bindings.fromServiceBindingRoot();
    let ob = await Bindings.find(b, "sso-claim");
    console.log(ob);


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


