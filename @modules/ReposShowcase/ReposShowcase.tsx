import React, { useEffect, useState } from "react";

import { Octokit } from "octokit";
import { type OctokitResponse } from "@octokit/types";
import { type ReposType } from "@shared";

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

  useEffect(() => {
    void (async () => {
      const data = await fetchRepos();
      setResponse(data);
    })();
  }, []);
  return (
    <>
      {response?.map((item) => (
        <>
          {item.full_name}
          <br />
          {item.description}
        </>
      ))}
    </>
  );
};
