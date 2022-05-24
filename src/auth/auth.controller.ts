import { Body, Controller, Post} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sigin')
  signIn() {
    this.authService.signin();
  }

  @Post('signup')
  signUp (@Body() dto: AuthDto) {
    console.log({dto});
    this.authService.signup();
  }
}
