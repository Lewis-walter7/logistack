export async function login(email: string, password: string) {
  const res = await fetch('http://localhost:5000/auth/login', {
    method: 'POST',
    credentials: 'include', // 🔐 enables sending/receiving cookies
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  if (!res.ok) throw new Error('Login failed')
  return await res.json()
}

export async function register(name: string, email: string, password: string) {
  const res = await fetch('http://localhost:5000/api/v2/auth/register', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password }),
  })

  if (!res.ok) throw new Error('Registration failed')
  return await res.json()
}

export async function getProfile() {
  const res = await fetch('http://localhost:5000/users/me', {
    method: 'GET',
    credentials: 'include',
  })

  if (!res.ok) throw new Error('Not authenticated')
  return await res.json()
}
