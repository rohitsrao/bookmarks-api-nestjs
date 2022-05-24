import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {

  signin() {
    return {message: 'I am signed in'};
  }

  signup() {
    return {message: 'I am signed up'};
  }

}
