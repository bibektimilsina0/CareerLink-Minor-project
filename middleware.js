

import { NextResponse } from 'next/server';
import { decodeJWTCompany, decodeJWTAdmin } from './helpers/validateToken';

// import { rateLimiter } from './helpers/rateLimiter';
import {
  loggedOutOnlyClientRoutes,
  adminLoggedOutAPIRoutes,
  companyLoggedOutAPIRoutes,
  adminLoggedInAPIRoutes,
  adminLoggedInClientRoutes,
  adminLoggedOutClientRoutes,
  companyLoggedInAPIRoutes,
  companyLoggedInClientRoutes,
  studentLoggedInAPIRoutes,
  studentLoggedInClientRoutes,
  companyandstudentCommonloggedInClientRoutes,
} from './routes'
import Cookies from 'js-cookie';


export async function middleware(request) {

  const { pathname } = request.nextUrl;
  console.log("Pathname:", pathname);

  // const rateLimiterResponse = await rateLimiter(request);
  // if (typeof rateLimiterResponse !== Boolean && rateLimiterResponse !== true) {
  //   return rateLimiterResponse;
  // }


  const adminToken = !!request.cookies.get('token') && !!request.cookies.get('admin');
  const companyToken = !!request.cookies.get('token') && !!request.cookies.get('company');
  const nextAuthToken = !!request.cookies.get('next-auth.session-token');

  if (nextAuthToken) {
    if (loggedOutOnlyClientRoutes.includes(pathname) || pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/dashboard', request.nextUrl.origin));
    }
    else {
      NextResponse.next();
    }
  }
  else if (companyToken) {

    const decodedToken = await decodeJWTCompany(request);
    if (decodedToken != null) {
      if (loggedOutOnlyClientRoutes.includes(pathname) || pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/dashboard', request.nextUrl.origin));
      }
      if (companyLoggedOutAPIRoutes.includes(pathname)) {
        return NextResponse.json({ msg: "Not Allowed while logged In" }, { status: 403 });
      }
      return NextResponse.next();
    }
    else {
      return NextResponse.json({ msg: "Unauthenticated User" }, { status: 403 });
    }
  }

  else if (adminToken) {

    const decodedToken = await decodeJWTAdmin(request);
    if (decodedToken != null) {
      if (loggedOutOnlyClientRoutes.includes(pathname) || pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.nextUrl.origin));
      }
      if (adminLoggedOutAPIRoutes.includes(pathname)) {
        return NextResponse.json({ msg: "Not allowed while logged in" }, { status: 403 });
      }
      return NextResponse.next();
    }
    else {
      return NextResponse.json({ msg: "Unauthenticated User" }, { status: 403 });
    }
  }
  else if(!adminToken&& !nextAuthToken && !companyToken) {
    if( 
      //  adminLoggedInAPIRoutes.includes(pathname)||
      adminLoggedInClientRoutes.includes(pathname)||
      // companyLoggedInAPIRoutes.includes(pathname)||
      companyLoggedInClientRoutes.includes(pathname)||
      // studentLoggedInAPIRoutes.includes(pathname)
      studentLoggedInClientRoutes.includes(pathname)||
      companyandstudentCommonloggedInClientRoutes.includes(pathname)
      ){
        return NextResponse.redirect(new URL('/', request.nextUrl.origin));
      }
    }
    else{
    return NextResponse.next();

  }

}



