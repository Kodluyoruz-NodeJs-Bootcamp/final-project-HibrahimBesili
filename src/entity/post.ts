import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity} from "typeorm";
import { Comment } from "./comment";
import { PostType } from "./postType";
import { User } from "./user";

@Entity()
export class UserPost extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => PostType,postType => postType.posts)
    type: PostType;

    @Column()
    name: string;

    @Column({default:0})
    likeCount: number;

    @Column({default:0})
    commentCount : number;

    @Column("bool")
    isShared : boolean;

    @Column()
    createdTime : Date;

    @ManyToOne(() => User,user => user.posts)
    user : User

    @OneToMany(() => Comment,comments => comments.userPost)
    comments : Comment[];
}