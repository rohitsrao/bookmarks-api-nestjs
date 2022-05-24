import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {

  constructor(private readonly prisma: PrismaService) {}

  signin() {
    return {message: 'I am signed in'};
  }

  signup() {
    return {message: 'I am signed up'};
  }

}
