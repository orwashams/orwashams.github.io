import React, { useEffect, useState } from "react";

import { Octokit } from "octokit";
import { type OctokitResponse } from "@octokit/types";

import { createStyles, getStylesRef } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import { type ReposType } from "@shared/types";

import Repo from "./Repo";

const fetchRepos = async () => {
  const octokit = new Octokit({
    auth: process.env.GH_ACCESS_TOKEN,
  });

  const res: OctokitResponse<ReposType, number> = await octokit.request(
    "GET /users/orwashams/repos"
  );

  return res.data;
};

export const ReposShowcase = () => {
  const [response, setResponse] = useState<ReposType>();
  const { classes } = useStyles();

  const slides = response?.map((repo) => (
    <Carousel.Slide key={repo.id.toString()}>
      <Repo repo={repo} />
    </Carousel.Slide>
  ));

  useEffect(() => {
    void (async () => {
      const data = await fetchRepos();
      setResponse(data);
    })();
  }, []);

  return (
    <footer>
      <Carousel
        classNames={classes}
        slideSize="70%"
        slideGap="md"
        height={450}
        controlsOffset="xs"
        loop
        align="center"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
      >
        {slides}
      </Carousel>
    </footer>
  );
};

const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef("controls"),
    transition: "opacity 150ms ease",
    opacity: 0,
  },

  root: {
    "&:hover": {
      [`& .${getStylesRef("controls")}`]: {
        opacity: 1,
      },
    },
  },
}));
