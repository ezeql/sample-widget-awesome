var React = require('react');
var LikeButton = require('./LikeButton.jsx');

var LikesList = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    onItemClick: React.PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div>
      {
        this.props.items.map( function(item) {
          return ( <LikeButton onToggleLike={this.props.onItemClick} key={item.id} 
                      item={item}></LikeButton> );
        }, this)
      }
      </div>
    );
  }
});

module.exports = LikesList;