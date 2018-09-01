import React, {Component} from 'react';
import Slider from 'react-slick';
import classNames from 'classnames';
import webConfig from './../../../../../webConfig';

class ReviewsSlider extends Component {

	constructor(props) {
		super(props);
		this.state = {
			meetTheTeam_loaded: false
		}
	}

	componentDidMount() {
		this.setState({meetTheTeam_loaded: true});
	}

	render() {
		var settings = {
			dots: true,
			infinite: true,
			autoplay: true,
			speed: 500,
			cssEase: 'linear',
			slidesToShow: 4,
			slidesToScroll: 1,
			adaptiveHeight: true,
			arrows: false,
			fade: false,
			responsive: [
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 2,
						autoplay: false
					},
				},
				{
					autoplay: false,
					breakpoint: 500,
					settings: {
						autoplay: false,
						slidesToShow: 1
					}
				}
			]
		};

		return (
			<div>
				<h2>
					{this.props.Heading}
				</h2>
				<div className="meetTheTeam">
					<div className={classNames({'banner_scroller': true, 'loaded': this.state.meetTheTeam_loaded})}>
						<Slider {...settings}>
							<div className="item">
								<div className="profilePic">
									<img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`}/>
								</div>
								<div className="details">
									<span className="quote">,,</span>
									<span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque dicta ea error, facilis hic magnam maxime nisi obcaecati possimus praesentium quidem quos repellat rerum veritatis, vitae voluptatem voluptatum! Ullam!</span>
									<span className="name">
                                    Владимир (г.Мценск)
                                </span>
								</div>
							</div>

							<div className="item">
								<div className="profilePic">
									<img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`}/>
								</div>
								<div className="details">
									<span className="quote">,,</span>
									<span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque dicta ea error, facilis hic magnam maxime nisi obcaecati possimus praesentium quidem quos repellat rerum veritatis, vitae voluptatem voluptatum! Ullam!</span>
									<span className="name">
                                    Jane Doe
                                </span>
								</div>
							</div>

							<div className="item">
								<div className="profilePic">
									<img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`}/>
								</div>
								<div className="details">
									<span className="quote">,,</span>
									<span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque dicta ea error, facilis hic magnam maxime nisi obcaecati possimus praesentium quidem quos repellat rerum veritatis, vitae voluptatem voluptatum! Ullam!</span>
									<span className="name">
                                    Jane Doe
                                </span>
								</div>
							</div>

							<div className="item">
								<div className="profilePic">
									<img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`}/>
								</div>
								<div className="details">
									<span className="quote">,,</span>
									<span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque dicta ea error, facilis hic magnam maxime nisi obcaecati possimus praesentium quidem quos repellat rerum veritatis, vitae voluptatem voluptatum! Ullam!</span>
									<span className="name">
                                    Jane Doe
                                </span>
								</div>
							</div>

							<div className="item">
								<div className="profilePic">
									<img src={`${webConfig.siteURL}/assets/graphics/meetTheTeam/profilePic.jpg`}/>
								</div>
								<div className="details">
									<span className="quote">,,</span>
									<span className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cumque dicta ea error, facilis hic magnam maxime nisi obcaecati possimus praesentium quidem quos repellat rerum veritatis, vitae voluptatem voluptatum! Ullam!</span>
									<span className="name">
                                    Jane Doe
                                </span>
								</div>
							</div>

						</Slider>
					</div>
				</div>
			</div>
		)
	};
}

export default ReviewsSlider;