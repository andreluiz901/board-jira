import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from '@/repositories/usersRepository';
import { HashGenerator } from '@/cryptography/hash-generator';
import { userAlreadyExistsError } from './errors/user-already-exists-error';
import { CreateUserResponse } from './types/create-user-response-type';
import { left, right } from '@/infra/either/either';
import { User } from '@/entities/user';

@Injectable()
export class UserService {

  constructor(private usersRepository: UsersRepository, private hashGenerator: HashGenerator) {}

  async create({name, email, password}: CreateUserDto): Promise<CreateUserResponse> {

    const userWithSameEmail = this.usersRepository.findByEmail(email)

    if (userWithSameEmail) return left(new userAlreadyExistsError(email))
    
    const hashedPassword = await this.hashGenerator.hash(password)

    const user = User.create({
      name,
      email,
      password: hashedPassword,
    })

    await this.usersRepository.create(user)

    return right({user})
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
