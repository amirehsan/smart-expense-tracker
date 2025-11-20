import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse, type NextRequest } from 'next/server'
import { Database } from '@/lib/types/database'

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createMiddlewareClient<Database>({ req: request, res: response })

  // Refresh session if expired - required for Server Components
  await supabase.auth.getSession()

  return response
}
