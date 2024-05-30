import { connect } from "react-redux";
import Reviews from "./Reviews";

import { RootState } from "@/store";

const mapStateToProps = (state: RootState) => {
  return {
    data: state.reviews.allIds,
    language: state.language.language,
  };
};

export default connect(mapStateToProps)(Reviews);
