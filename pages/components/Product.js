import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Product(props) {
  const { product } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      <CardMedia
          component="img"
          image={product.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {product.price} $
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
