import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Comment } from "./comment";
import { UserPost } from "./post";

@Entity()
export class PostType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    typeName: string;

    @OneToMany(() => UserPost,userPost => userPost.type)
    posts : UserPost[]

    @OneToMany(() => Comment,comment => comment.type)
    comments : Comment[]
}