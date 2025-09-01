import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthRepositoryService } from '@repositories/auth/auth.repository.service';

@Injectable()
export class AuthService {
    constructor(
        private readonly authRepositoryService: AuthRepositoryService,
        private readonly jwtService: JwtService
    ) {}

    async login({ username, password }: { username: string, password: string }): Promise<any> {
        console.log("credentials: ",username, password)
        const user = await this.authRepositoryService.findByUser(username);
        console.log("USER: ",user)
        if(user?.password != password) throw {message: 'Usuario e(ou) senha invalidos', access_token: null}
        const access_token = await this.jwtService.signAsync({username: user?.username, id: user?.id});
        return {access_token};
    }

    async validateToken({token}: {token: string}): Promise<any> {
        try {
           const isValidToken = await this.jwtService.verifyAsync(token);
           return { isValidToken, message: 'Token is valid' };
        } catch (error) {
            return { isValidToken: null, message: 'Token is invalid or expired' };
        }
    }

}
