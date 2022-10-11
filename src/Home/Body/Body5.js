import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14/lifestyle/-1200w5/gsmarena_029.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            User Interface
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The iPhone 14 comes in a rich selection of colors. Midnight is Apple's take on black,
          and Starlight is the company's signature silver/white hue.
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
  );
}
