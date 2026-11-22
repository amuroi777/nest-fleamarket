import { User, UserStatus } from "../generated/prisma/client.js"
import { UserScalarFieldEnum } from "../generated/prisma/internal/prismaNamespace.js"

export type RequestUser = {
  id: string
  name: string
  status: UserStatus
}