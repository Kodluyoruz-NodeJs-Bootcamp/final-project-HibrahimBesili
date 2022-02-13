import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import { Comment } from "./comment";
import { UserPost } from "./post";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({unique : true})
    email: string;

    @Column()
    userName: string;

    @Column({default:''})
    password: string;

    @Column()
    createdTime : Date;

    @OneToMany(() => UserPost,userPost => userPost.user)
    posts : UserPost[]

    @OneToMany(() => Comment,comment => comment.user)
    comments : Comment[]
}