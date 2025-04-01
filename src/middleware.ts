import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api(.*)'
]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    return; 
  }

  const session = await auth();
  
  if (!session.userId) {
    return session.redirectToSignIn({ returnBackUrl: req.url });
  }
  if (req.nextUrl.pathname === '/') {
    return Response.redirect(new URL('/dashboard', req.url));
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)'],
};
