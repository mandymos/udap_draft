interface IUser {
  username: string
  password: string
}

interface ILoggedInUser {
  email: string
  family_name: string
  given_name: string
  email_verified: boolean
}
export type { ILoggedInUser, IUser }
