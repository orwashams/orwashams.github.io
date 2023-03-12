import React, { useEffect, useState } from "react";

import { Octokit } from "octokit";
import { type OctokitResponse } from "@octokit/types";

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
    <Carousel
      slideSize="70%"
      slideGap="md"
      height={200}
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
  );
};
