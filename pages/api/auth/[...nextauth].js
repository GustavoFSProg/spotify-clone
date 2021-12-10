// import NextAuth from 'next-auth'
// import SpotfyProvider from 'next-auth/providers/spotfy'
// import { spotifyApi, LOGIN_URL } from '../../../lib/spotify'

// async function refreshAccessToken(token) {
//   try {
//     spotifyApi.setAccessToken(token.accessToken)
//     spotifyApi.setRefreshToken(token.RefreshToken)

//     const { body: refreshedToken } = await spotifyApi.refreshAccessToken()
//     console.log(`Refresh token ${refreshedToken}`)

//     return {
//       ...token,
//       accessToken: refreshedToken.access_token,
//       accessTokenExpires: Date.now + refreshAccessToken.expires_in * 1000,
//       refreshToken: refershedToken.refresh_token ?? token.refreshToken,
//     }
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

//     async session({ session, token }) {
//       session.user.accessToken = token.accessToken
//       session.user.refreshToken = token.refreshToken
//       session.user.username = token.username

//       return session
//     },
//   },
// })
