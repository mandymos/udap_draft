import React from "react";
import LayoutPage from "../../components/layout/LayoutPage";
import UdapRegistration from "../../components/inputComponents/UdapRegistration";

const pageProps: ILayoutPageProps = {
  title: "UDAP Registration",
  description: "https://fhirlabs.net/fhir/r4/.well-known/udap",
};
export default function Registration() {
  return (
    <LayoutPage props={pageProps}>
      <UdapRegistration />
    </LayoutPage>
  );
}
