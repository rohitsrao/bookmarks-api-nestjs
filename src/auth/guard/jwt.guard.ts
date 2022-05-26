import { AuthGuard } from "@nestjs/passport/dist/auth.guard";

export class JwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
