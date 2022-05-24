import { Body, Controller, Post} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto/auth.dto";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  signIn(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }

  @Post('signup')
  signUp (@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }
}
