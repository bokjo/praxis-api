import { Module } from "@nestjs/common";
import { RefreshTokensModule } from "../auth/refresh-tokens/refresh-tokens.module";
import { ShieldModule } from "../shield/shield.module";
import { DataloaderModule } from "../dataloader/dataloader.module";
import { EventsModule } from "../events/events.module";
import { GroupMemberRequestsModule } from "../groups/group-member-requests/group-member-requests.module";
import { GroupRolesModule } from "../groups/group-roles/group-roles.module";
import { GroupsModule } from "../groups/groups.module";
import { ImagesModule } from "../images/images.module";
import { PostsModule } from "../posts/posts.module";
import { ProposalActionRolesModule } from "../proposals/proposal-actions/proposal-action-roles/proposal-action-roles.module";
import { ProposalActionsModule } from "../proposals/proposal-actions/proposal-actions.module";
import { ProposalsModule } from "../proposals/proposals.module";
import { UsersModule } from "../users/users.module";
import { ContextService } from "./context.service";
import { CommentsModule } from "../comments/comments.module";

@Module({
  imports: [
    CommentsModule,
    DataloaderModule,
    EventsModule,
    GroupMemberRequestsModule,
    GroupRolesModule,
    GroupsModule,
    ImagesModule,
    PostsModule,
    ProposalActionRolesModule,
    ProposalActionsModule,
    ProposalsModule,
    RefreshTokensModule,
    ShieldModule,
    UsersModule,
  ],
  providers: [ContextService],
  exports: [ContextService],
})
export class ContextModule {}
