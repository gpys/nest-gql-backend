import { Field, ObjectType, Int } from '@nestjs/graphql'

// import type { User } from '@prisma/client'

import { User } from '../../user/models/user.model'

@ObjectType()
export class Document {
    @Field(type => Int)
    id: number;

    @Field()
    title: string;

    @Field()
    text: string;

    @Field(type => Int)
    authorID: number //userID

    @Field()
    createdAt: Date;
    //set default to now

    @Field({nullable: true})
    updatedAt?: Date;
    //set to updated
}