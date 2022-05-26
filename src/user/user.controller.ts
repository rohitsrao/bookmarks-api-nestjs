import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('users')
export class UserController {

  @UseGuards(JwtGuard)
  @Get('me')
  getMe(@Req() req: Request) {
    console.log(req.user);
    return req.user;
  }

}
