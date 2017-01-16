var AllItems = React.createClass({
	handleDelete() {
		this.props.handleDelete(id);
	},

	render() {
	    var items= this.props.items.map((item) => {
	        return (
	            <div>
	                <h3>{item.name}</h3>
	                <p>{item.description}</p>
	                <button onClick={this.handleDelete}>Delete</button>
	            </div>
	        )
	    });

	    return(
	        <div>
	            {items}
	        </div>
	    )
	}
});