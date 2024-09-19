import React, { useState } from "react";
import RecipeList from "./components/RecipeList";
import { Container, Typography } from "@mui/material";
import SearchBar from "./components/SearchBar";
import { recipes as recipeData } from "./data/recipes"; // Correct import

const App = () => {
  const [filteredRecipes, setFilteredRecipes] = useState([]); // Initially empty
  const [isSearchActive, setIsSearchActive] = useState(false); // New state to track if search is active

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filtered = recipeData.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRecipes(filtered);
      setIsSearchActive(true);  // Set search to active
    }
  };

  const handleReset = () => {
    setFilteredRecipes([]);
    setIsSearchActive(false);  // Reset the search
  };

  return (
    <Container style={{ paddingTop : "50px"}}>
      <Typography variant="h3" align="center" gutterBottom style={{fontFamily:"Pacifico, cursive"}}>
        Recipe Sharing Website
      </Typography>

      {/* Search Bar Component */}
      <SearchBar onSearch={handleSearch} onReset={handleReset} />

      {/* Show suggestion or recipes based on search */}
      {!isSearchActive ? (
       <>
        <Typography variant="h6" align="center" mt={4} style={{fontFamily:"Pacifico, cursive"}}>
          Start searching to find delicious recipes!
        </Typography>
        <Typography variant="h4" align="center" mt={4} style={{fontFamily:"Kanit, sans-serif", color:"GrayText"}}>
         Akhil John
        </Typography>
       </>
      ) : filteredRecipes.length === 0 ? (
        <Typography variant="h6" align="center" mt={4} style={{fontFamily:"Pacifico, cursive"}}>
          No recipes found. Try searching for something else!
        </Typography>
      ) : (
        <RecipeList recipes={filteredRecipes} />
      )}
    </Container>
  );
};

export default App;
