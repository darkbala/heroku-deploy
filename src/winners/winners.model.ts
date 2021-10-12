import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';
import { User } from '../users/users.model';
import { Prize } from '../prizes/prizes.model';

interface WinnerCreationAttrs {
  userId: number;
  prizeId: number;
}

@Table({
  tableName: 'winners',
  createdAt: false,
  updatedAt: false,
  indexes: [
    {
      name: 'winners_userId_prizeId_key',
      unique: false,
      fields: ['userId', 'prizeId'],
    },
  ],
})
export class Winner extends Model<Winner, WinnerCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Unique(false)
  @Column({
    type: DataType.INTEGER,
    unique: false,
  })
  userId: number;

  @ForeignKey(() => Prize)
  @Unique(false)
  @Column({
    type: DataType.INTEGER,
    unique: false,
  })
  prizeId: number;
}
