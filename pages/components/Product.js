import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Product(props) {
  const { product } = props;

  return (
    <Card sx={{ maxWidth: 250, maxHeight: 250, margin: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={product?.image}
          height={100}
          width={100}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product?.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="p">
            {product?.price}$
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
