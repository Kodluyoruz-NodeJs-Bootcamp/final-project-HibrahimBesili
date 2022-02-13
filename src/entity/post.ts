import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity} from "typeorm";
import { Comment } from "./comment";
import { User } from "./user";
import {PostType}  from '../constants/enums'

@Entity()
export class UserPost extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({default:0})
    likeCount: number;

    @Column({default:0})
    commentCount : number;

    @Column({default:"../upload/posts/default.png"})
    imageName:string;

    @Column()
    typeId : PostType

    @Column("bool")
    isShared : boolean;

    @Column()
    createdTime : Date;

    @ManyToOne(() => User,user => user.posts)
    user : User

    @OneToMany(() => Comment,comments => comments.userPost)
    comments : Comment[];
}