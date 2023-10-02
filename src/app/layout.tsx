import "@mantine/core/styles.css";
import "./globals.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

export const metadata = {
  title: "Orwa",
  description: "Orwa's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark">{children}</MantineProvider>
      </body>
    </html>
  );
}
