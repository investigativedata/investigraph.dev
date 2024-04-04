import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";
import { Screen, MediaHero } from "@investigativedata/style";

import prefectImg from "../assets/prefect.png"
import alephImg from "../assets/aleph.png"
import investigraphImg from "../assets/investigraph-eu.png"

const TechnologyHero = () => (
  <MediaHero
    title="Technology"
    teaser={`investigraph is built on top of the etl framework prefect, written
    in python. We offer an easy to understand yaml specification that requires
    no coding skills to get started.`}
    mediaComponent={
      <AspectRatio>
        <img src={prefectImg} />
      </AspectRatio>
    }
    action={
      <Button color="danger" href="https://prefect.io">
        prefect.io
      </Button>
    }
  />
);

const OpenSourceHero = () => (
  <MediaHero
    mediaRight
    title="Open Source"
    teaser={`investigraph is and will always be Open Source via the MIT License.
    We use investigraph to build our own public data catalogue for useful
    datasets with european scope.`}
    mediaComponent={
      <AspectRatio>
        <img src={investigraphImg} />
      </AspectRatio>
    }
    action={
      <Button color="danger" href="https://investigraph.eu">
        investigraph.eu
      </Button>
    }
  />
);

const IntegrationHero = () => (
  <MediaHero
    title="Integration"
    teaser={`As the data follows a commonly used data model, many connections
    with other tools are possible, including “Aleph”, a research platform for
    investigative journalism.`}
    mediaComponent={
      <AspectRatio>
        <img src={alephImg} />
      </AspectRatio>
    }
    action={
      <Button color="danger" href="https://aleph.run">
        aleph.run
      </Button>
    }
  />
);

export default function TechnologyScreen() {
  return (
    <Screen background="danger">
      <Typography level="h1" textAlign="center">
        Part of an established ecosystem
      </Typography>
      <Typography textAlign="center">
        investigraph is built on top of industry-standard technology and connects to well-known
        tools within the research landscape.
      </Typography>
      <TechnologyHero />
      <OpenSourceHero />
      <IntegrationHero />
    </Screen>
  );
}
