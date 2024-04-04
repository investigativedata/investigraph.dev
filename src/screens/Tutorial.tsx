import Typography from "@mui/joy/Typography";
import { Screen } from "@investigativedata/style";

export default function TutorialScreen() {
  return (
    <Screen background="primary">
      <Typography level="h1" textAlign="center">
        Get started
      </Typography>
      <Typography textAlign="center">
        In our tutorial we show you how to extract, transform and load your data with investigraph
      </Typography>
    </Screen>
  );
}
