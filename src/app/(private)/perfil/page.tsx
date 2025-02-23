import { getSession } from '@/lib/auth0'
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getSession()

  if (!session) {
    // the user will be redirected to authenticate and then taken to the
    // /dashboard route after successfully being authenticated
    return redirect('/auth/login?returnTo=/')
  }

  return (
    <div>
      <h1>Profile</h1>

      <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </div>
  )
}
