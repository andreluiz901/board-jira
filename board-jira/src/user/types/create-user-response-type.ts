import { User } from "@/entities/user"
import { userAlreadyExistsError } from "../errors/user-already-exists-error"
import { Either } from "@/infra/either/either"

export type CreateUserResponse = Either<
userAlreadyExistsError,
{
  user: User
}
>