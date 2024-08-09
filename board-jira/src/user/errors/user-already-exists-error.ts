import { ServiceError } from "@/infra/errors/service-error";

export class userAlreadyExistsError extends Error implements ServiceError {
  constructor(identifier: string) {
    super(`User ${identifier} already exists.`)
  }
}