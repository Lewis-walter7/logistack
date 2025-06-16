import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/orders", "/track", "/settings", "/support"];

export function middleware(request: NextRequest) {
    const {pathname } = request.nextUrl;
    const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

    const token = request.cookies.get("authToken")

    const response = NextResponse.next();

    if( isProtectedRoute && !token) {
            response.headers.set("x-requires-auth", "true");
    }

    return response;
}
