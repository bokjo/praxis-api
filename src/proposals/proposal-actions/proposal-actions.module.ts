import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ImagesModule } from "../../images/images.module";
import { ProposalsModule } from "../proposals.module";
import { ProposalAction } from "./models/proposal-action.model";
import { ProposalActionRolesModule } from "./proposal-action-roles/proposal-action-roles.module";
import { ProposalActionsResolver } from "./proposal-actions.resolver";
import { ProposalActionsService } from "./proposal-actions.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([ProposalAction]),
    forwardRef(() => ProposalsModule),
    ProposalActionRolesModule,
    ImagesModule,
  ],
  providers: [ProposalActionsService, ProposalActionsResolver],
  exports: [ProposalActionsService],
})
export class ProposalActionsModule {}
