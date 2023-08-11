import { rule } from "graphql-shield";
import { Context } from "../../../context/context.service";
import { GroupPrivacy } from "../../../groups/group-configs/models/group-config.model";

export const isPublicPost = rule()(
  async (parent, args, { services: { postsService } }: Context) => {
    const postId = parent ? parent.id : args.id;
    const post = await postsService.getPost(postId, ["group.config"]);
    if (!post.group) {
      return false;
    }
    return post.group.config.privacy === GroupPrivacy.Public;
  }
);

export const isPublicPostImage = rule()(
  async (parent, _args, { services: { imagesService } }: Context) => {
    const image = await imagesService.getImage({ id: parent.id }, [
      "post.group.config",
    ]);
    return image?.post?.group?.config.privacy === GroupPrivacy.Public;
  }
);
