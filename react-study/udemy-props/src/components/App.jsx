import React from "react";
import contacts from "../contact";
import Card from "./Card";

function App() {
	// console.log(contacts);
	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			{contacts.map((contact, _) =>
				<Card name={contact.name}
					url={contact.imgURL}
					phone={contact.phone}
					email={contact.email}
				/>)}
		</div>
	);
}

export default App;
