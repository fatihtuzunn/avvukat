import Links from "../components/sub-components/modal_content/Links";

import {
  changeEkler,
  changeURL,
} from "../store/dilekceSlice";
export const otherInputs = [
  {
    title: "Ekler",
    desc: "Ekler relevant to the position you are applying to.",
    buttonText: "ekler",
    task: changeEkler,
  },
  {
    title: "Website and Social Links",
    desc: "Professional websites and social media handles. Avoid links to personal accounts for family and friends.",
    buttonText: "link",
    modal: <Links />,
    task: changeURL,
    source: "links",
  },


];
