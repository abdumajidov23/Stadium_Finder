import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Req,
  HttpStatus,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Response, Request } from 'express';
import { SignInDto } from "./dto/signin.dto";
import { CookieGetter } from "../decorators/cookieGetter.decorator";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("signup")
  signUp(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.usersService.signUp(createUserDto, res);
  }

  @Post("signin")
  signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.usersService.signIn(signInDto, res);
  }

  @Post("signout")
  async signOut(@Req() req: Request, @Res() res: Response) {
    try {
      res.clearCookie("refresh_token");
      return res
        .status(HttpStatus.OK)
        .json({ message: "Tizimdan muvaffaqiyatli chiqdingiz" });
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Xatolik yuz berdi" });
    }
  }

  @Post("/refreshToken/:id")
  async refreshToken(
    @Param("id") id: number,
    @CookieGetter("refresh_token") refresh_token: string,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.usersService.refreshToken(id, refresh_token, res);
  }

  @Get("activate/:link")
  activateUser(@Param("link") link: string, @Res() res: Response) {
    return this.usersService.activateUser(link, res);
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}

