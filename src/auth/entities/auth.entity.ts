import { 
    Column,
    DataType,
    Model,
    Table
} from "sequelize-typescript";

interface AuthCreationAttr {
    name: string
    userName: string
    email: string
    password: string
    phone: string
    dateOfBirth: string
    gender: "male" | "female"
}

@Table({tableName: "Auth"})
export class Auth extends Model<Auth, AuthCreationAttr> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    name: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    userName: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    email: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    password: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    phone: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    dateOfBirth: string;

    @Column({
        type: DataType.STRING(100),
        allowNull: false,
        unique: true,
    })
    gender: string;
}
