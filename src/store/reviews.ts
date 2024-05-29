import { Language } from "@/shared/types";
import {
  Action as LanguageAction,
  CHANGE_LANGUAGE,
} from "@/store/language";
import reviewsData from "@/constants/reviewsData.json";

export const getReviewsData = (language: Language) => {
  return {
    byId: reviewsData[language],
    allIds: Object.keys(reviewsData[language]),
  };
}

const reviewsReducer = (state = {}, action: LanguageAction) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        ...getReviewsData(action.language)
      };
    default:
      return state;
  }
}

export default reviewsReducer;
