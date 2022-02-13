
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import { Comment } from "./comment";
import { UserPost } from "./post";

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text',{nullable:true})
    firstName: string;

    @Column('text',{nullable:true})
    lastName: string;

    @Column({unique : true})
    email: string;

    @Column('text',{nullable:true})
    userName: string;

    @Column({default:''})
    password: string;

    @Column('date',{nullable:true})
    createdTime : Date;

    @OneToMany(() => UserPost,userPost => userPost.user)
    posts : UserPost[]

    @OneToMany(() => Comment,comment => comment.user)
    comments : Comment[]
}