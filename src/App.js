import AllContacts from "./pages/AllContacts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EditContact from "./pages/EditContact";
import AddContact from "./pages/AddContact";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact>
						<AllContacts />
					</Route>
					<Route path="/edit/:id" exact>
						<EditContact />
					</Route>
					<Route path="/add" exact>
						<AddContact />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
