import { DataTypes } from 'sequelize';
import {
  AllowNull,
  AutoIncrement,
  Column,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  createdAt: false,
  updatedAt: false,
})

export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    userName: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    email: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
    password: string;

  @AllowNull(true)
  @Column({
    type: DataTypes.STRING,
  })
    activationToken: string | null;
}
