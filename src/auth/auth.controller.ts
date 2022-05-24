import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sigin')
  signIn() {
    return 'I am signed in';
  }

  @Post('signup')
  signUp () {
    return 'I am signed up';
  }
}
