import React, { Component } from 'react';
export const Context = React.createContext();

export class Provider extends Component {
	state = {
		name: '',
		number: '',
		liked: [],
		cart: [],
		cartTotal: 0,
		cartOffTotal: 0
	};

	changeName = (e) => {
		this.setState({
			name: e
		});
	};

	changeNumber = (e) => {
		this.setState({
			number: e
		});
	};

	like = (newLike) => {
		const found = this.state.liked.find((any) => any.name === newLike.name);
		if (!found) {
			this.setState({
				liked: [ ...this.state.liked, newLike ]
			});
		}
	};

	remove = (name) => {
		if (this.state.liked.length < 2) {
			return this.setState({
				liked: []
			});
		}

		const filtered = this.state.liked.filter((any) => any.name !== name);

		this.setState({
			liked: filtered
		});
	};

	addToCart = (newItem) => {
		const found = this.state.cart.find((any) => any.name === newItem.name);
		if (!found) {
			this.setState({
				cart: [ ...this.state.cart, newItem ],
				cartTotal: this.state.cartTotal + newItem.price,
				cartOffTotal: this.state.cartOffTotal + (newItem.offprice - newItem.price)
			});
		}
	};

	removeCart = (name) => {
		if (this.state.cart.length < 2) {
			return this.setState({
				cart: [],
				cartTotal: 0,
				cartOffTotal: 0
			});
		}
		const fouundIt = this.state.cart.find((any) => any.name === name);
		const filtered = this.state.cart.filter((any) => any.name !== name);

		this.setState({
			cart: filtered,
			cartTotal: this.state.cartTotal - fouundIt.price,
			cartOffTotal: this.state.cartOffTotal - (fouundIt.offprice - fouundIt.price)
		});
	};

	render() {
		return (
			<Context.Provider
				value={{
					changeNumber: this.changeNumber,
					changeName: this.changeName,
					name: this.state.name,
					number: this.state.number,
					liked: this.state.liked,
					like: this.like,
					remove: this.remove,
					cart: this.state.cart,
					removeCart: this.removeCart,
					addToCart: this.addToCart,
					cartTotal: this.state.cartTotal,
					cartOffTotal: this.state.cartOffTotal
				}}
			>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default Provider;
