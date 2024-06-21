import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export const middleware = async (request) => {
  //   return NextResponse.redirect(new URL("/about/history", request.url));
  //   return NextResponse.rewrite(new URL("/about/history", request.url));
  // -------------------------
  //   if (request.nextUrl.pathname.startsWith("/about"))
  // return NextResponse.redirect(new URL("/contacts", request.url));
  // -------------------------
  //   if (!user) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  //   return NextResponse.next();
  // -------------------------

  const token = cookies(request).get('next-auth.session-token')
  console.log(token);

  if (!token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard", "/services"],
};
