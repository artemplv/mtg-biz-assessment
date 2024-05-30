import { Language } from "@/shared/types";
import {
  Action as LanguageAction,
  CHANGE_LANGUAGE,
} from "@/store/language";
import reviewsData from "@/constants/reviewsData.json";

type ReviewsState = {
  byId: {
    [key: string]: {
      name: string;
      date: string;
      review: string;
    }
  };
  allIds: string[];
};

export const getReviewsData = (language: Language): ReviewsState => {
  return {
    byId: reviewsData[language],
    allIds: Object.keys(reviewsData[language]),
  };
}

const defaultState = getReviewsData('ru');

const reviewsReducer = (state = defaultState, action: LanguageAction) => {
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
