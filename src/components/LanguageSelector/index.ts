import { connect } from "react-redux";
import { setLanguage } from "@/store/language";
import LanguageSelector from "./LanguageSelector";

import { Language } from "@/shared/types";
import {
  RootState,
  AppDispatch,
} from "@/store";

const mapStateToProps = (state: RootState) => {
  return {
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setLanguage: (language: Language) => {
    dispatch(setLanguage(language));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
