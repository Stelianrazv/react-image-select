import React, { PropTypes, Component } from 'react'


var ImageSelect = React.createClass( {
	componentDidMount: function(){
		if(this.props.defaultIndex){
			this.setState({
	      selected : this.props.images[this.props.defaultIndex] || ""
	    });
		}

		else{
			this.setState({
	      selected : this.props.images[0] || ""
	    });
		}

		window.addEventListener("click", this._handleCloseOptions);
	},
	componentWillUnmount: function(){
    window.removeEventListener("click", this._handleCloseOptions);
	},
	propTypes: {
    images : PropTypes.array.isRequired
	},
	getInitialState : function(){
		return {
      selected : ""
		};
	},
	render : function() {
		var options = [];
		for(var i = 0 ; i < this.props.images.length; i++){
			options.push(
				<span key={i} className='imageSelect-options-image-wrapper'
							onClick={this._handleClickOnImage(i, this.props.images[i])}>
					<span className='imageSelect-options-image' style={{
						"backgroundImage":"url('"+this.props.images[i]+"')",
						"width":this.props.width || "30px",
						"height":this.props.height || "30px",
					}}></span>
				</span>
			);
		}

		return (
		  <span className={"imageSelect"} >
				{this._style}
        <span className='imageSelect-selected' onClick={this._handleOpenOptions}>
						<span className='imageSelect-selected-image' style={{
		              "backgroundImage":"url('"+this.state.selected+"')",
									"width":this.props.width || "30px",
									"height":this.props.height || "30px",
		        }}></span>
				</span>

				<div className={'imageSelect-options' + (this.state.isOptionsShow ? " show" : "")}>
					{options}
				</div>
		  </span>
		)
	},


	_handleOpenOptions : function(e){
		if(this.props.onOptionsOpen) this.props.onOptionsOpen(e);
		e.stopPropagation();
		this.setState({
			isOptionsShow : true
		});
	},


	_handleCloseOptions : function(){
		if(this.props.onOptionsClose) this.props.onOptionsClose(e);
		this.setState({
			isOptionsShow : false
		});
	},



	_handleClickOnImage : function(index, image){
		var component = this;
		return function(){
			if(component.props.onChange) component.props.onChange(index, image);
			component.setState({
				selected : image
			});
			component._handleCloseOptions();
		}
	},

	_style : <style>{"\
			.imageSelect, .imageSelect span{\
				display:inline-block;\
				vertical-align:middle;\
				position:relative;\
			}\
			.imageSelect{\
				line-height:0px;\
			}\
			.imageSelect-selected{\
				border:1px solid #DDD;\
				padding:2px 10px;\
				padding-right:15px;\
				border-radius:5px;\
				cursor:pointer;\
				background-color:white;\
			}\
			.imageSelect-selected:hover{\
				opacity:0.7;\
			}\
			.imageSelect-selected-image, .imageSelect-options-image{\
				background-size : 100% 100%;\
				background-position : center center;\
				background-repeat : no-repeat;\
			}\
			.imageSelect-selected::after{\
				content:'❮ ❯';\
				-ms-transform: rotate(90deg);\
    		-webkit-transform: rotate(90deg);\
    		transform: rotate(90deg);\
				position:absolute;\
				right:0px;\
				top:50%;\
				font-size:10px;\
				color:#BBB;\
			}\
			.imageSelect .imageSelect-options{\
				position:absolute;\
				background-color:white;\
				border-radius:5px;\
				border:1px solid #DDD;\
				top:0px;\
				left:-10px;\
				right:-10px;\
				overflow:hidden;\
				display:none;\
				z-index:500;\
			}\
			.imageSelect .imageSelect-options.show{\
				display:inline;\
			}\
			.imageSelect .imageSelect-options-image-wrapper{\
				display:block;\
				width:100%;\
				text-align:center;\
				cursor:pointer;\
				padding:5px 0px;\
			}\
			.imageSelect .imageSelect-options-image-wrapper:hover{\
				background-color:#EEE;\
			}\
			.imageSelect .imageSelect-options-image{\
			}\
	"}</style>


});



export default ImageSelect
