import React from "react";
import LayoutPage from "../../components/layout/LayoutPage";
import DiscoveryQueryInput from "../../components/inputComponents/DiscoveryQueryInput";
const pageProps: ILayoutPageProps = {
  title: "UDAP Metadata",
};
export default function Discovery() {
  return (
    <LayoutPage props={pageProps}>
      <DiscoveryQueryInput />
    </LayoutPage>
  );
}
