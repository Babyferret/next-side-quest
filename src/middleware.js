import { NextResponse } from 'next/server';

export function middleware(req) {
    const token = req.cookies.get('pb_auth_token');
    if (!token) {
        return NextResponse.redirect(new URL('/', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/pages/:path*'
};
