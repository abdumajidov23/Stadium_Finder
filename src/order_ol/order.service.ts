import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order) private orderModel: typeof Order,
    @InjectBot() private bot: Telegraf<Context>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      const new_order = await this.orderModel.create(createOrderDto);
      const order = await this.orderModel.findByPk(new_order.id, {
        include: { all: true },
      });
      await this.bot.telegram.sendMessage(process.env.GROUP_ID, `${order}`);
      return order;
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException(error);
    }
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
