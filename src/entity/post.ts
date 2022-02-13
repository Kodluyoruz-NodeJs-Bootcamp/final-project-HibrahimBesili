
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, BaseEntity} from "typeorm";
import { Comment } from "./comment";
import { User } from "./user";
import {PostType}  from '../constants/enums'

@Entity()
export class UserPost extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text',{nullable:true})
    name: string;

    @Column({default:0})
    likeCount: number;

    @Column({default:0})
    commentCount : number;

    @Column({default:"../upload/posts/default.png"})
    imageName:string;

    @Column('int',{nullable:true})
    typeId : number

    @Column("int")
    isShared : number;

    @Column('date',{nullable:true})
    createdTime : Date;

    @ManyToOne(() => User,user => user.posts)
    user : User

    @OneToMany(() => Comment,comments => comments.userPost)
    comments : Comment[];
}