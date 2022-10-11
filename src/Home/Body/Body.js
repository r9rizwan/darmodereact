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
          image="https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14/lifestyle/-1200w5/gsmarena_019.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            iPhone 14
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Apple loves a good "buzzword" as much as the next company, probably
            even more. The trendy "r words" arguably get the most love and
            attention. Words like Reduce, Reuse, Repair, Recycle.
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
  );
}
