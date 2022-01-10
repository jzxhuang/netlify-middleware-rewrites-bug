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

  // Same as /b, but trying /bar.html.
  // Still doesn't work on Netlify...
  if (req.nextUrl.pathname === "/c") {
    console.log("middleware: rewriting /c to /bar.html")
    return NextResponse.rewrite("/bar.html")
  }

  // Same as /b, but trying with  {DEPLOY_URL}/bar.
  // This workaround appears to work...
  if (req.nextUrl.pathname === "/d") {
    const baseUrl = process.env.DEPLOY_URL ?? ""
    console.log(`middleware: rewriting /d to${baseUrl}/bar`)
    return NextResponse.rewrite(`${baseUrl}/bar`)
  }

  // Same as /d, also works
  if (req.nextUrl.pathname === "/e") {
    const baseUrl = process.env.DEPLOY_URL ?? ""
    console.log(`middleware: rewriting /e to${baseUrl}/bar.html`)
    return NextResponse.rewrite(`${baseUrl}/bar.html`)
  }
}
