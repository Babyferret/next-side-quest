import { NextResponse } from 'next/server';

export function middleware(req) {
    const token = req.cookies.get('pb_auth_token');

    if (!token || token['value'] === '') {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/auth/:path*'
};

