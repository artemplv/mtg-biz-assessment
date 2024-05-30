import { connect } from "react-redux";
import ReviewItem from "./ReviewItem";

type PropTypes = {
  id: string;
}

const mapStateToProps = (state: any, ownProps: PropTypes) => {
  const {
    reviews: {
      byId,
    },
  } = state;

  const review = byId[ownProps.id];

  return {
    ...review,
  };
};

export default connect(mapStateToProps)(ReviewItem);
