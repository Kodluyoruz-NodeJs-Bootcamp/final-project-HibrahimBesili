import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BaseEntity} from "typeorm";
import { UserPost } from "./post";
import { User } from "./user";
import { PostType } from "./postType";

@Entity()
export class Comment extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    typeId: number;
    
    @ManyToOne(() => UserPost, userPost => userPost.comments, { cascade: true, onDelete: "CASCADE" })
    userPost : UserPost;

    @Column()
    createdTime : Date;

    @ManyToOne(() => User, user => user.comments)
    user : User;

    @Column({length:4000})
    comment : String;

    @ManyToOne(() => PostType,postType => postType.comments)
    type: PostType;
}