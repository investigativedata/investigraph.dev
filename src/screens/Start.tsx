import { Grid, Typography } from '@mui/joy';
import { Animation, Screen } from "@investigativedata/style";

const Title = () => (
  <Typography
    level="h1"
    textAlign="center"
    maxWidth="20ch"
    m="0 auto"
    p="0"
  >
    Build and manage your structured data for investigative research projects
  </Typography>
);

export default function StartScreen() {
  return (
    <Screen background="neutral">
      {/* <Animation src="/investigraph-01.riv" width={2000} height={800}> */}
        <Title />
      {/* </Animation> */}
      <Grid container justifyContent="center" pt="12.5rem">
        <Grid md={6}>
          <Typography textAlign="center">
            investigraph is a framework to manage collections of structured data for investigative
            journalism and research projects.
          </Typography>
        </Grid>
        <Animation src="/investigraph-02.riv" width={1436} height={400} />
        <Grid md={6}>
          <Typography textAlign="center">
            It allows you to stream data from different sources into a common data model to process
            it further for research and analysis.
          </Typography>
        </Grid>
      </Grid>
    </Screen>
  );
}
