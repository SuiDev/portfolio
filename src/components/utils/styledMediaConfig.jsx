import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  pc: "1180px",
  tablet: "820px",
  mobile: "600px",
  smartphone: "450px"
});

export default customMedia;
