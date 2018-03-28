import React from "react";
import Meta from "./meta";
import _ from "lodash";
import { Helmet } from "react-helmet";

const SEO = props => {
  let content = _.find(Meta, { url: props.url });
  if (!content) {
    content = _.find(Meta, { url: "default" });
  }

  return (
    <Helmet>
      <title>{content.title}</title>
      <meta name="description" content={content.description} />
      <meta name="keywords" content={content.keywords} />
    </Helmet>
  );
};

export default SEO;
