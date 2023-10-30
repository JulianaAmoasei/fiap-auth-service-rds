import { DataTypes, Model, Sequelize } from 'sequelize';

class UserModel extends Model {
  public id!: string;
  public cpf!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  static initialize(sequelize: Sequelize): void {
    UserModel.init({

      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    }, {
      paranoid: true,
      sequelize,
      tableName: 'users',
      timestamps: true,
    });
  }

  static associate(): void {
  }

}

export default UserModel;
