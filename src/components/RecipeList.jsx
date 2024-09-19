import React from "react";
import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard"; // Assuming you have a RecipeCard component

const RecipeList = ({ recipes }) => {
  return (
    <Grid container spacing={3} mt={4}>
      {recipes.map((recipe, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;
