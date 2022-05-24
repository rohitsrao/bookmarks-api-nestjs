import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2';

@Injectable()
export class AuthService {

  constructor(private readonly prisma: PrismaService) {}

  signin() {
    return {message: 'I am signed in'};
  }

  async signup(dto: AuthDto) {
    const hash = await argon.hash(dto.password);
    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        hash: hash
        }
    });
    delete user.hash;
    return user;
  }

}
