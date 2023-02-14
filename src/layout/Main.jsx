import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=95405593&s=matrix")
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
    }

    searchValue = (str, type = "all") => {
        this.setState({ loading: true });
        try {
            fetch(
                `http://www.omdbapi.com/?apikey=95405593&s=${str}${
                    type !== "all" ? `&type=${type}` : ""
                }`
            )
                .then((response) => response.json())
                .then((data) =>
                    this.setState({ movies: data.Search, loading: false })
                );
        } catch {
            <h2>Not Found</h2>;
        }
    };
    render() {
        const { movies, loading } = this.state;
        return (
            <main className="container content">
                <Search searchValue={this.searchValue} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export default Main;
