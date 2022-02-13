
import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BaseEntity} from "typeorm";
import { UserPost } from "./post";
import { User } from "./user";

@Entity()
export class Comment extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => UserPost, userPost => userPost.comments, { cascade: true, onDelete: "CASCADE" })
    userPost : UserPost;

    @Column('date',{nullable:true})
    createdTime : Date;

    @ManyToOne(() => User, user => user.comments)
    user : User;

    @Column({length:4000})
    comment : String;

}