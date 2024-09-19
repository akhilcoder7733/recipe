import React, { useState, useEffect } from "react";
import { TextField, Button, Box, List, ListItem, ListItemButton } from "@mui/material";
import { recipes as recipeData } from "../data/recipes"; // Assuming recipes are available here

const SearchBar = ({ onSearch, onReset }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]); // State for suggestions

  // Update suggestions based on input text
  useEffect(() => {
    if (searchTerm) {
      const filteredSuggestions = recipeData.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm(""); // Clear the search input field
    setSuggestions([]); // Clear suggestions
    onReset(); // Reset the search results in the parent component
  };

  // When a suggestion is clicked
  const handleSuggestionClick = (recipeTitle) => {
    setSearchTerm(recipeTitle); // Set the clicked recipe title in search input
    onSearch(recipeTitle); // Trigger search with the selected title
    setSuggestions([]); // Clear suggestions after selection
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
      <TextField
        label="Search for a recipe"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: "10px", width: "300px" }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{ marginBottom: "10px", width: "150px" }}
      >
        Search
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleReset}>
        Reset
      </Button>

      {/* Display suggestions list if there are any */}
      {suggestions.length > 0 && (
        <List sx={{ width: "300px", maxHeight: "200px", overflowY: "auto", marginTop: "10px" }}>
          {suggestions.map((recipe, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleSuggestionClick(recipe.title)}>
                {recipe.title}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default SearchBar;
