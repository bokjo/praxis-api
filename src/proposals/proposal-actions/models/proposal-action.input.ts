/**
 * TODO: Add the following fields (pulled from old-praxis) to ProposalAction model below:
 * groupEvent: EventMotionInput
 * groupRole: CreateRoleInput
 * groupRoleId: String
 * groupRolePermissions: [ProposedPermissionInput]
 * groupSettings: [SettingInput]
 * userId: String
 */

import { Field, InputType } from "@nestjs/graphql";
import { FileUpload, GraphQLUpload } from "graphql-upload";
import { ProposalActionRoleInput } from "../proposal-action-roles/models/proposal-action-role-input";

@InputType()
export class ProposalActionInput {
  @Field()
  actionType: string;

  @Field({ nullable: true })
  role?: ProposalActionRoleInput;

  @Field({ nullable: true })
  groupName?: string;

  @Field({ nullable: true })
  groupDescription?: string;

  @Field(() => GraphQLUpload, { nullable: true })
  groupCoverPhoto?: Promise<FileUpload>;
}
