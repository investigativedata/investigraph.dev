import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import { Animation, Screen } from "@investigativedata/style";

const Title = () => (
  <Typography level="h1" sx={{ textAlign: "center" }}>
    Build and manage
    <br />
    your structured data
    <br />
    for investigative
    <br />
    research projects
  </Typography>
);

export default function StartScreen() {
  return (
    <Screen background="neutral">
      <Animation src="/investigraph-01.riv" width={1436} height={800}>
        <Title />
      </Animation>
      <Grid container justifyContent="center" pt="200px">
        <Grid md={6}>
          <Typography textAlign="center">
            investigraph is a framework to manage collections of structured data for investigative
            journalism and research projects.
          </Typography>
          <Animation src="/investigraph-02.riv" width={855} height={200} />
          <Typography textAlign="center">
            It allows you to stream data from different sources into a common data model to process
            it further for research and analysis.
          </Typography>
        </Grid>
      </Grid>
    </Screen>
  );
}
