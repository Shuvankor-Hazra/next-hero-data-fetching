import { NextResponse } from "next/server";

const user = true;
const coo = "next-superhero";

export const middleware = (request) => {
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

  const cookies = request.cookies.get("token");
  if (!cookies || cookies.value !== coo) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/dashboard", "/services"],
};
