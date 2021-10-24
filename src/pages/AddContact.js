import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddContact = () => {
	const [contact, setContact] = useState({
		first_name: "",
		last_name: "",
		email: "",
	});

	const history = useHistory();

	const onInputChange = (e) => {
		setContact({ ...contact, [e.target.name]: e.target.value });
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post("http://localhost:3002/data", contact);
		// console.log(contact);
		history.push("/");
	};
	return (
		<div className="absolute z-10 top-0 left-0 w-full h-screen text-gray-700 bg-gray-300 backdrop-filter bg-opacity-50 backdrop-blur-xl flex items-center justify-center">
			<div className="bg-white w-4/5 flex flex-col px-10 py-8 rounded-2xl shadow-xl space-y-5">
				<div className="flex items-center justify-between">
					<h4 className="text-xl">Add New Contact</h4>
					<Link
						to="/"
						className="text-lg bg-gray-200 p-3 rounded-full cursor-pointer"
					>
						<MdClose />
					</Link>
				</div>
				<form className="flex flex-col space-y-3" onSubmit={(e) => onSubmit(e)}>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="flex flex-col space-y-3">
							<span>First Name</span>
							<input
								type="text"
								placeholder="John"
								className="input"
								name="first_name"
								value={contact.first_name}
								onChange={(e) => onInputChange(e)}
								required
							/>
						</div>
						<div className="flex flex-col space-y-3">
							<span>Last Name</span>
							<input
								type="text"
								placeholder="Doe"
								className="input"
								name="last_name"
								value={contact.last_name}
								onChange={(e) => onInputChange(e)}
								required
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-5">
						<div className="flex flex-col space-y-3">
							<span>Email</span>
							<input
								type="email"
								placeholder="example@gmail.com"
								className="input"
								name="email"
								value={contact.email}
								onChange={(e) => onInputChange(e)}
								required
							/>
						</div>
					</div>
					<div className="pt-4 flex items-center justify-end">
						<input
							type="submit"
							value="Add Contact"
							className="btn cursor-pointer"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddContact;
