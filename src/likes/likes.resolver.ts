// TODO: Test thoroughly and add remaining functionality - below is a WIP

import {
  Args,
  Context,
  Int,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from "@nestjs/graphql";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { Dataloaders } from "../dataloader/dataloader.service";
import { User } from "../users/models/user.model";
import { LikesService } from "./likes.service";
import { CreateLikeInput } from "./models/create-like.input";
import { CreateLikePayload } from "./models/create-like.payload";
import { Like } from "./models/like.model";

@Resolver(() => Like)
export class LikesResolver {
  constructor(private likesService: LikesService) {}

  @ResolveField(() => User)
  async user(
    @Context() { loaders }: { loaders: Dataloaders },
    @Parent() { userId }: Like
  ) {
    return loaders.usersLoader.load(userId);
  }

  @Mutation(() => CreateLikePayload)
  async createLike(
    @Args("likeData") likeData: CreateLikeInput,
    @CurrentUser() user: User
  ) {
    return this.likesService.createLike(likeData, user);
  }

  @Mutation(() => Boolean)
  async deleteLike(@Args("id", { type: () => Int }) id: number) {
    return this.likesService.deleteLike(id);
  }
}
