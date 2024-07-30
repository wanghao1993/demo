import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) { 
    // const headers = req.headers;
    // if (!headers.has('token')) { 
    //     return NextResponse.redirect(new URL('/', req.url)); 
    // } // 验证 token
    // return NextResponse.next();
 }

 export const config = { matcher: ['/dashboard'] };
 