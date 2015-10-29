var React = require('react');
var classNames = require('classnames');

var LikeButton = React.createClass({
    getInitialState: function() {
      return {'isHovered':false};
    },
    onClick:function(){
      this.props.onToggleLike(this.props.item);
      this.setState({'unliking':!this.props.item.liked});    
    },
    onMouseOver:function(){
      this.setState({'isHovered':true});
    },
    onMouseOut:function(){
      this.setState({'unliking':false,'isHovered':false});
    },
    render: function() {
      var btnClass = classNames({
        'like-button': true,
        'like-button-liked': this.props.item.liked,
        'like-button-not-liked': (!this.props.item.liked && !this.state.isHovered) || this.state.unliking,
        'like-button-over': !this.props.item.liked && this.state.isHovered && !this.state.unliking
      });

      return (
          <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} onClick={this.onClick} className={btnClass}></div>
      );
    }
});


module.exports = LikeButton;