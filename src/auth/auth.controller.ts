import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) {}

    @Post('/signup')
    singUp(@Body(ValidationPipe) authCrendialtsDto: AuthCredentialsDto) {
        return this.authService.singUp(authCrendialtsDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authCrendialtsDto: AuthCredentialsDto): Promise<{ accessToken: string }>{
        return this.authService.signIn(authCrendialtsDto);
    }
}
