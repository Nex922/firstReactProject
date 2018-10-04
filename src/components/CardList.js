import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
	render() {
		const { robots } = this.props;
		return (
		<div>
		{
			robots.map((user, i) => {
				return (
					<Card
						key = {i}
						id={robots[i].id}
						email={robots[i].email}
						name={robots[i].name}
						username={robots[i].username}
				 	/>
			 	)
			})
		}
		</div>
		);
	}
}

export default CardList;