import {
  Button as MUIButton,
  ButtonProps,
  createStyles,
  withStyles,
} from "@material-ui/core";
import { BLURPLE_BUTTON_COLORS } from "../../styles/Shared/theme";
import Messages from "../../utils/messages";

const Button = withStyles(() =>
  createStyles({
    root: {
      fontFamily: "Inter Bold",
      textTransform: "none",
      minWidth: 80,

      ...BLURPLE_BUTTON_COLORS,
    },
  })
)(MUIButton);

const SubmitButton = (props: ButtonProps) => {
  return (
    <Button type="submit" variant="contained" color="primary" {...props}>
      {props.children ? props.children : Messages.actions.submit()}
    </Button>
  );
};

export default SubmitButton;
