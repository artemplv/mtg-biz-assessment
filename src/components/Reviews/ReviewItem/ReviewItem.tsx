import React from "react";
import "./style.scss";

class ReviewItem extends React.Component<PropTypes> {
  constructor(props: PropTypes) {
    super(props);
  }

  render() {
    const {
      name,
      date,
      review,
    } = this.props;

    return (
      <div className="review-item">
        <div className="name-date-row">
          <span className="author-name">
            {name}
          </span>
          <span className="review-date">
            {date}
          </span>
        </div>
        
        <p className="review-content">
          {review}
        </p>
      </div>
    )
  }
}

type PropTypes = {
  id: string;
  name?: string;
  review?: string;
  date?: string;
}

export default ReviewItem;
