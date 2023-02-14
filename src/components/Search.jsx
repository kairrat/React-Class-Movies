import React from "react";

class Search extends React.Component {
    state = {
        Search: "",
    };

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchValue(this.state.Search, this.state.type);
        }
    };

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchValue(this.state.Search, this.state.type);
            }
        );
    };

    render() {
        return (
            <div className="row">
                <div className="input-field col s12">
                    <input
                        onChange={(e) =>
                            this.setState({ Search: e.target.value })
                        }
                        value={this.state.Search}
                        onKeyDown={this.handleKey}
                        id="text"
                        type="search"
                        placeholder="which movie you wanna search?"
                        className="validate"
                    />
                    <button
                        onClick={() =>
                            this.props.searchValue(
                                this.state.Search,
                                this.state.type
                            )
                        }
                        className="btn waves-effect waves-light blue darken-2"
                        type="submit"
                        name="action"
                    >
                        Submit
                    </button>
                </div>
                <div className="filter">
                    <div className="filter_container">
                        <p>
                            <label>
                                <input
                                    name="type"
                                    type="radio"
                                    data-type="all"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === "all"}
                                />
                                <span>all</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    name="type"
                                    type="radio"
                                    data-type="movie"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === "movie"}
                                />
                                <span>Movies only</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input
                                    name="type"
                                    type="radio"
                                    data-type="series"
                                    onChange={this.handleFilter}
                                    checked={this.state.type === "series"}
                                />
                                <span>Series only</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
