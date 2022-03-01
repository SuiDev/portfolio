import React from "react";
import { Link } from "react-router-dom";

/** Material UI Modules */
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const WorkCard = (props) => (
  <Card 
    sx={{
      maxWidth: 400,
      minHeight: 540,
      height: "65vh",
      margin: "0 10px 30px 10px"
    }}
  >
    {/** カードがクリックされたとき、指定したURLへ遷移します。 */}
    <Link
      to={props.url}
      style={{
        textDecoration: "none",
        color: "black"
      }}
    >
      <CardActionArea>
        {/** カードに画像を挿入します。 */}
        <CardMedia
          component="img"
          alt={props.name}
          height="230"
          // TODO: 画像を差し替える。
          image={require(`../../assets/portfolio.png`)}
          /**
          image={require(`../../assets/{props.name}.jpg`)}
          */
        />
        {/** カードにテキストを挿入します。 */}
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              padding: "20px 0 20px 0"
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              padding: "0 10px 10px 10px",
              minHeight: "25vh",
              textAlign: "left"
            }}
          >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Link>
  </Card>
);

export default WorkCard;
