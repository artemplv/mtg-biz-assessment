import { Language } from "@/shared/types";

export interface Action {
  type: string;
  language: Language;
}

export const CHANGE_LANGUAGE = 'language/CHANGE_LANGUAGE';

export const setLanguage = (language: Language) => ({
  type: CHANGE_LANGUAGE,
  language,
});

const languageReducer = (state = {}, action: Action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
}

export default languageReducer;
