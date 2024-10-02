import { Injectable, Inject } from '@nestjs/common';
import { CreateUserWalletDto } from './dto/create-user_wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user_wallet.dto';
import { InjectModel } from '@nestjs/sequelize';  // For injecting the model
import { UserWallet } from './models/user_wallet.model';

@Injectable()
export class UserWalletService {
  constructor(
    @InjectModel(UserWallet)
    private userWalletModel: typeof UserWallet,
  ) {}

  async create(createUserWalletDto: CreateUserWalletDto): Promise<UserWallet> {
    const userWallet = await this.userWalletModel.create(createUserWalletDto);
    return userWallet;
  }

  async findAll(): Promise<UserWallet[]> {
    return this.userWalletModel.findAll();
  }

  async findOne(id: number): Promise<UserWallet> {
    return this.userWalletModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserWalletDto: UpdateUserWalletDto): Promise<[number, UserWallet[]]> {
    return this.userWalletModel.update(updateUserWalletDto, {
      where: {
        id,
      },
      returning: true, // returns the updated object(s)
    });
  }

  async remove(id: number): Promise<void> {
    const userWallet = await this.findOne(id);
    if (userWallet) {
      await userWallet.destroy();
    }
  }
}
