// import NextAuth from 'next-auth'
// import SpotfyProvider from 'next-auth/providers/spotfy'
// import { LOGIN_URL } from '../../../lib/spotify'

// async function refreshAccessToken(token) {
//   try {
//   } catch (error) {
//     console.error(error)
//     return {
//       ...token,

//       error: 'refreshAccessTokenError',
//     }
//   }
// }

// export default NextAuth({
//   // Configure one or more authentication providers
//   providers: [
//     SpotfyProvider({
//       clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//       clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
//       authorization: LOGIN_URL,
//     }),
//     // ...add more providers here
//   ],

//   secret: process.env.JWT_SECRET,
//   pages: {
//     sigIn: '/login',
//   },
//   callbacks: {
//     async jwt({ token, account, user }) {
//       if (account && user) {
//         console.log('ACCESS TOKEN EXISTING!!')

//         return {
//           ...token,
//           accessToken: account.access.token,
//           refreshToken: account.refresh.token,
//           username: account.providerAccountId,
//           accessTokenExpires: account.expires_at * 1000,
//         }
//       }
//       if (Date.now() < token.accessTokenExpires) {
//         return token
//       }
//       console.log('ACCESS TOKEN HAS EXPIRES!!')

//       return await refreshAccessToken(token)
//     },
//   },
// })
