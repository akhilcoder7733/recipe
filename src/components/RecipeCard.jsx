import React from "react";
import { Card, CardMedia, CardContent, Typography, List, ListItem, ListItemText, Box } from "@mui/material";

const RecipeCard = ({ recipe }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "auto",
        boxShadow: 3,
        borderRadius: "10px",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia component="img" height="180" image={recipe.image} alt={recipe.title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#3f51b5" }}>
          {recipe.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Ingredients:
        </Typography>
        <List dense>
          {recipe.ingredients.map((ingredient, index) => (
            <ListItem key={index}>
              <ListItemText primary={ingredient} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
