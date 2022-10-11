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
          image="https://fdn.gsmarena.com/imgroot/reviews/22/apple-iphone-14/lifestyle/-1200w5/gsmarena_001.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Inside Box
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Inside the box, you'll find a relatively short 1-meter long USB Type-C to Lightning cable, 
          a SIM ejector tool (outside the US, where the iPhone 14 is e-SIM only and lacks a physical SIM tray)
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
  );
}
