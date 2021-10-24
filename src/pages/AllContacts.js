import React, { useState, useEffect } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import axios from "axios";

const AllContacts = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		loadContacts();
	}, []);

	const loadContacts = async () => {
		const result = await axios.get("http://localhost:3002/data");
		setContacts(result.data);
		// console.log(result.data);
	};

	const deleteContact = async (id) => {
		alert("Do you want to delete this contact?");
		await axios.delete(`http://localhost:3002/data/${id}`);
		loadContacts();
	};

	return (
		<div className="w-full px-6 py-8 md:py-12 md:px-10 flex flex-col">
			<div className="w-full text-right">
				<Link to="/add" className="btn">
					+ New Contact
				</Link>
			</div>

			<h4 className="text-xl font-semibold text-gray-800 my-5">All Contacts</h4>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
				{contacts.map((contact, index) => (
					<div
						className="w-full bg-white rounded-xl px-6 py-4 md:px-7 md:py-5 flex flex-col md:flex-row space-y-2 md:space-y-0 md:items-center justify-between"
						key={contact.id}
					>
						<div className="flex space-x-6 items-center">
							<div>
								<Avatar
									name={`${contact.first_name} ${contact.last_name}`}
									size="70"
									className="w-8 h-8 object-contain rounded-xl"
								/>
							</div>
							<div className="flex flex-col space-y-1">
								<h3 className="text-lg line-clamp-1 whitespace-nowrap font-semibold text-gray-800">
									<span>{contact.first_name}</span>{" "}
									<span>{contact.last_name}</span>
								</h3>
								<h5 className="text-gray-600 line-clamp-1 whitespace-nowrap text-sm">
									{contact.email}
								</h5>
							</div>
						</div>

						<div className="flex space-x-3 self-end md:self-center">
							<Link
								to={`/edit/${contact.id}`}
								className="p-3 rounded-lg text-lg hover:bg-blue-500 hover:text-white bg-blue-200 text-blue-500"
							>
								<MdModeEdit />
							</Link>
							<span
								onClick={() => deleteContact(contact.id)}
								className="p-3 cursor-pointer rounded-lg text-lg hover:bg-red-400 hover:text-white bg-red-200 text-red-500"
							>
								<MdDelete />
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AllContacts;
