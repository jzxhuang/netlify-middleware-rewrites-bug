import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
  // An example of a working rewrite through middleware
  // The rewrite destination is a Next.js route, which works as expected on Netlify.
  if (req.nextUrl.pathname === "/a") {
    console.log("middleware: rewriting /a to /foo")
    return NextResponse.rewrite("/foo")
  }

  // Suppose on this route, you wanted to rewrite to a specific page based on some logic
  // i.e., check if a cookie exists, and rewrite, otherwise do nothing...
  if (req.nextUrl.pathname === "/b") {
    console.log("middleware: rewriting /b to /bar")
    return NextResponse.rewrite("/bar")
  }
}
