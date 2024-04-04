import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import { Screen, MediaHero } from "@investigativedata/style";

import prefectImg from "../assets/prefect.png"

const ExtractStep = () => (
  <MediaHero
    mediaRight
    tagLine="Step 1"
    title="Extract"
    teaser={`Scrape data from public websites, APIs, json or csv data dumps, or
    sql databases. On repeat.`}
    mediaComponent={
      <AspectRatio>
        <img src={prefectImg} />
      </AspectRatio>
    }
    action={
      <Button color="warning" href="https://docs.investigraph.dev/reference/#extract">
        Documentation
      </Button>
    }
  />
);

const TransformStep = () => (
  <MediaHero
    mediaRight
    tagLine="Step 2"
    title="Transform"
    teaser={`Map the source data to the common "followthemoney" model to create
    Persons, Companies and how they are connected.`}
    mediaComponent={
      <AspectRatio>
        <img src={prefectImg} />
      </AspectRatio>
    }
    action={
      <Button color="warning" href="https://docs.investigraph.dev/reference/#transform">
        Documentation
      </Button>
    }
  />
);

const LoadStep = () => (
  <MediaHero
    mediaRight
    tagLine="Step 3"
    title="Load"
    teaser={`Store your datasets on your computer, in the cloud, and share it
    with your team or external collaborators.`}
    mediaComponent={
      <AspectRatio>
        <img src={prefectImg} />
      </AspectRatio>
    }
    action={
      <Button color="warning" href="https://docs.investigraph.dev/reference/#load">
        Documentation
      </Button>
    }
  />
);

export default function FeatureScreen() {
  return (
    <Screen background="warning">
      <Typography level="h1" textAlign="center">
        Following industry standard for data engineering
      </Typography>
      <Typography textAlign="center">
        investigraph helps you to set up a pipeline that can <u>extract</u>, <u>transform</u> and{" "}
        <u>load</u> data from many formats into various target systems.
      </Typography>
      <Typography textAlign="center">
        For all of these pipeline stages, the investigraph framework provides many helpers and
        abstraction logic to reduce the amount of code that needs to be developed for a specific
        dataset.
      </Typography>
      <ExtractStep />
      <TransformStep />
      <LoadStep />
      <Typography textAlign="center">
        For all of these pipeline stages, the investigraph framework provides many helpers and
        abstraction logic to reduce the amount of code that needs to be developed for a specific
        dataset.
      </Typography>
    </Screen>
  );
}
