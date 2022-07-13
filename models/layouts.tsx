import React from 'react';
import { AppProps } from "next/app";
import { ReactElement } from "react";
import { NextPage } from 'next';

export type LayoutProps = {
  children: React.ReactNode;
};
export type NextPageWithLayout = NextPage & {
  Layout?: (page: LayoutProps) => ReactElement;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
