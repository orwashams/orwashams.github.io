import React from "react";
import { Card, Text } from "@mantine/core";
import { BrandGithub } from "tabler-icons-react";
import { type RepoType } from "@shared/types";

type Props = {
  repo: RepoType;
};

const Repo = ({ repo }: Props) => {
  return (
    <Card shadow="lg" p="xl" radius="md" withBorder bg={""}>
      <Card.Section className=" flex justify-center" h={300}>
        <BrandGithub size={80} strokeWidth={2} color={"black"} />
      </Card.Section>

      <Text weight={500} size="lg" mt="md">
        <>{repo.name}</>
      </Text>

      <Text mt="xs" color="dimmed" size="sm">
        <>{repo.full_name}</>
      </Text>
    </Card>
  );
};

export default Repo;
