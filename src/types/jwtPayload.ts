import { UserStatus } from "../generated/prisma/enums.js"

export type JwtPayload = {
  sub: string
  username: string
  status: UserStatus
}