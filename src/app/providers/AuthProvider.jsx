// "use client";

// import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

// export function AuthProvider({ children }) {
//     console.log(process.env.NEXT_PUBLIC_KINDE_ISSUER_URL);
//     return (
//         <KindeProvider
//             domain={process.env.NEXT_PUBLIC_KINDE_ISSUER_URL}
//             clientId={process.env.NEXT_PUBLIC_KINDE_CLIENT_ID}
//             redirectUri={process.env.NEXT_PUBLIC_KINDE_POST_LOGIN_REDIRECT_URL}
//             logoutUri={process.env.NEXT_PUBLIC_KINDE_POST_LOGOUT_REDIRECT_URL}
//         >
//             {children}
//         </KindeProvider>
//     );
// }
