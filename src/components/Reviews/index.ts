import { connect } from "react-redux";
import Reviews from "./Reviews";

const mapStateToProps = (state: any) => {
  return {
    data: state.reviews.allIds,
  };
};

export default connect(mapStateToProps)(Reviews);
