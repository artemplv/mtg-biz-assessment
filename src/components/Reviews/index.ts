import { connect } from "react-redux";
import Reviews from "./Reviews";

const mapStateToProps = (state: any) => {
  return {
    data: state.reviews.allIds,
    language: state.language.language,
  };
};

export default connect(mapStateToProps)(Reviews);
