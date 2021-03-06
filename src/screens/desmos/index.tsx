import React from "react";
import { useTranslation } from "i18n";
import { theme } from "@styles";
import { Layout } from "@components";
import { DesmosBody, MooncakeBody } from "./components";

const { colors } = theme;

const Desmos = () => {
  const { t } = useTranslation("desmos");

  return (
    <Layout
      title={t("title")}
      description={t("description")}
      navColor={colors.gray600}
      image="/static/images/assets/Facebook-Desmos.png"
      twitterImage="/static/images/assets/Twitter-Desmos.png"
    >
      <div>
        <DesmosBody />
        <MooncakeBody />
      </div>
    </Layout>
  );
};

export default Desmos;
