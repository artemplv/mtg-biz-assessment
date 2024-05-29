import { connect } from "react-redux";
import { setLanguage } from "@/store/language";
import LanguageSelector from "./LanguageSelector";

import { Language } from "@/shared/types";

const mapStateToProps = (state: any) => {
  console.log(state);

  return {
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  setLanguage: (language: Language) => {
    dispatch(setLanguage(language));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector);
