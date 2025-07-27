export type UserRole = 'NORMAL_USER' | 'ADMIN'

export interface User {
  id: string
  name: string
  email: string
  login_attempts: number
  last_login: string | null
  password_digest: string
  role: UserRole
  created_at: string
  updated_at: string
}
