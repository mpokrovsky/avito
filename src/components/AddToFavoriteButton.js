import React from 'react';

class AddToFavoriteButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            text: "Add to favorites"
        }
    }

    handleClick = () => {
        this.setState({
            disabled: true,
            text: "Added"
        });
        this.addToFav();
    }

    addToFav = () => {
        const prodId = this.props.prod.id;
        const previousFavs = !this.props.favorites ? [] : this.props.favorites;

        if (previousFavs === null || !previousFavs.find(item => item.id === prodId)) {
            const newFavorite = [...previousFavs, this.props.prod];
            this.props.updateData({ favorites: newFavorite });
            localStorage.setItem('favorites', JSON.stringify(newFavorite));
        }
    };

    render() {
        return (
            <div>
                <br></br>
                <input
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={this.handleClick}
                    disabled={this.state.disabled}
                    value={this.state.text}
                />
            </div>
        )
    }
}

export default AddToFavoriteButton;
