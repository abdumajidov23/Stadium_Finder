import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserCardDto } from './dto/create-user_card.dto';
import { UpdateUserCardDto } from './dto/update-user_card.dto';
import { InjectModel } from '@nestjs/sequelize';
import { UserCard } from './models/user_card.model';

@Injectable()
export class UserCardsService {
  constructor(@InjectModel(UserCard) private userCardModule: typeof UserCard) {}

  async create(createUserCardDto: CreateUserCardDto) {
    try {
      return await this.userCardModule.create(createUserCardDto);
    } catch (error) {
      throw new Error(`Foydalanuvchi kartasini yaratishda xatolik: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.userCardModule.findAll({ include: { all: true } });
    } catch (error) {
      throw new Error(`Foydalanuvchi kartalarini olishda xatolik: ${error.message}`);
    }
  }

  async findOne(id: number) {
    const userCard = await this.userCardModule.findOne({
      where: { id },
      include: { all: true },
    });
    
    if (!userCard) {
      throw new NotFoundException(`ID ${id} bilan foydalanuvchi kartasi topilmadi`);
    }

    return userCard;
  }

  async update(id: number, updateUserCardDto: UpdateUserCardDto): Promise<UserCard> {
    const [rowsUpdated, [updatedUserCard]] = await this.userCardModule.update(updateUserCardDto, {
      where: { id },
      returning: true,
    });

    if (!rowsUpdated) {
      throw new NotFoundException(`ID ${id} bilan foydalanuvchi kartasi topilmadi`);
    }

    return updatedUserCard;
  }

  async remove(id: number) {
    const rowsDeleted = await this.userCardModule.destroy({ where: { id } });
    
    if (!rowsDeleted) {
      throw new NotFoundException(`ID ${id} bilan foydalanuvchi kartasi topilmadi`);
    }

    return { message: `ID ${id} bilan foydalanuvchi kartasi muvaffaqiyatli o'chirildi` };
  }
}
