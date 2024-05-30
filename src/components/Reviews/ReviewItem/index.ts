import { connect } from "react-redux";
import ReviewItem from "./ReviewItem";

import { RootState } from "@/store";

type PropTypes = {
  id: string;
}

const formatName = (fullName: string): string => {
  const splitName = fullName.split(' ');

  let formatted = splitName[0];

  if (splitName.length > 1) {
    formatted += ` ${splitName[1].charAt(0)}.`;
  }

  return formatted;
}

const mapStateToProps = (state: RootState, ownProps: PropTypes) => {
  const {
    reviews: {
      byId,
    },
  } = state;

  const review = byId[ownProps.id];

  return {
    ...review,
    name: formatName(review.name),
  };
};

export default connect(mapStateToProps)(ReviewItem);
