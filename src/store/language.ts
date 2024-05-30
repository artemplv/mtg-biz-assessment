import { Language } from "@/shared/types";

export interface Action {
  type: string;
  language: Language;
}

type LanguageState = {
  language: Language
};

const defaultState: LanguageState = {
  language: 'ru'
};

export const CHANGE_LANGUAGE = 'language/CHANGE_LANGUAGE';

export const setLanguage = (language: Language) => ({
  type: CHANGE_LANGUAGE,
  language,
});

const languageReducer = (state = defaultState, action: Action) => {
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
