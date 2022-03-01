import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  pc: "1300px",
  mobile: "768px"
});

export default customMedia;
