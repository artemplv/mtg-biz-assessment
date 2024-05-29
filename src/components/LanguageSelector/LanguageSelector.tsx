import React from "react";
import { Language } from "@/shared/types";

function isOfTypeLanguage (option: string): option is Language {
  return ['ru', 'en'].includes(option);
}

class LanguageSelector extends React.Component<PropTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.onLanguageChange = this.onLanguageChange.bind(this);
  }

  onLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const {
      setLanguage,
    } = this.props;

    if (isOfTypeLanguage(event.target.value)) {
      setLanguage(event.target.value);
    }
  }

  render() {
    const {
      language,
    } = this.props;

    return (
      <div>
        <select
          className=""
          value={language}
          onChange={this.onLanguageChange}
        >
          <option value="ru">Ru</option>
          <option value="en">En</option>
        </select>
      </div>
    )
  }
}

type PropTypes = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export default LanguageSelector;
