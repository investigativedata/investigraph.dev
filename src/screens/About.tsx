import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Grid from "@mui/joy/Grid";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import { OpenMoji, Screen, Drawer } from "@investigativedata/style";

const LegalNotice = () => (
  <Grid container maxWidth="lg" justifyContent="center">
    <Grid md={3}>
      <Typography level="body-md">
        IDIO Daten Import Export Gmbh
        <br />
        Gottschedstr. 4<br />
        13357 Berlin
        <br />
        <Link href="mailto:hi@investigativedata.org">hi@investigativedata.org</Link>
      </Typography>
    </Grid>
    <Grid md={3}>
      <Typography level="body-md">
        REGISTRED
        <br />
        Berlin (Charlottenburg)
        <br />
        HRB 252764
      </Typography>
      <Typography level="body-md">
        MANAGING DIRECTOR
        <br />
        Simon Wörpel
      </Typography>
      <Typography level="body-md">
        VAT ID
        <br />
        DE361014839
      </Typography>
    </Grid>
    <Grid md={3}></Grid>
  </Grid>
);

export default function AboutScreen() {
  return (
    <Screen background="success">
      <Box justifyContent="center" display="flex" flexDirection="column" pb="200px">
        <Typography level="h1" textAlign="center">
          About
        </Typography>
        <Typography textAlign="center">
          investigraph is developed by{" "}
          <Link href="https://investigativedata.io">investigativedata.io</Link>, the data
          engineering agency for investigative journalism.
        </Typography>
        <Typography textAlign="center">Contact us via hi@investigativedata.org</Typography>
        <OpenMoji icon="incoming envelope" sx={{ maxWidth: "200px" }} />
        <Button color="success" href="mailto:hi@investigativedata.org">
          Write us an E-Mail
        </Button>
      </Box>
      <Typography level="body-md" textAlign="center">
        investigraph is a project by{" "}
        <Link href="https://investigativedata.io">investigativedata.io</Link> and is funded by{" "}
        <Link href="https://www.media-lab.de/de/media-tech-lab">Media Tech Lab Bayern</Link> |
        <Drawer buttonContent="Legal Notice" anchor="bottom">
          <LegalNotice />
        </Drawer>{" "}
        | <Link href="https://github.com/investigativedata/investigraph">github</Link>
      </Typography>
    </Screen>
  );
}
