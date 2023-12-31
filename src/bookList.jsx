import React, { useEffect } from "react";
import axios from "axios";
import {
    List,
    ListItem,
    ListItemText,
    TextField,
    Container,
    Typography,
    Box,
} from "@mui/material";
import { useBookContext } from "./bookContexts";
const BookList = () => {
    const { searchQuery, setSearchQuery } = useBookContext();
    const [books, setBooks] = React.useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts`
                );
                setBooks(response.data);
            } catch (error) {
                console.error("Error fetching data:" + error);
            }
        };
        fetchData();
    }, []);
    65
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <Container>
            <Box sx={{ my: 4 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{ color: "red", display: "flex", justifyContent: "center" }}
                >
                    Book Search
                </Typography>
                <TextField
                    label="Search Books"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
                <List>
                    {filteredBooks.map((book) => (
                        <ListItem key={book.id}>
                            <ListItemText primary={book.title} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Container>
    );
};
export default BookList;