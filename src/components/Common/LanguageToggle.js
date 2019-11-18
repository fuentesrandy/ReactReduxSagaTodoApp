import React, { Component } from 'react';
import { withLocalize, Translate } from 'react-localize-redux';
import { renderToStaticMarkup } from "react-dom/server";
import englishResources from "../../resources/en.resources.json";

class LanguageToggle extends Component {

    constructor(props) {
        super(props);
        this.props.initialize({
            languages: [
                { name: 'English', code: 'en' },
                { name: 'Spanish', code: 'es' },
            ],
            translation: englishResources,
            options: {
                renderToStaticMarkup,
                renderInnerHtml: true,
                defaultLanguage: "en"
            }
        });
    }

    componentDidUpdate(prevProps) {
        const prevLangCode = prevProps.activeLanguage && prevProps.activeLanguage.code;
        const curLangCode = this.props.activeLanguage && this.props.activeLanguage.code;
        const hasLanguageChanged = prevLangCode !== curLangCode;
        if (hasLanguageChanged) {
            this.addTranslationsForActiveLanguage();
        }
    }
    addTranslationsForActiveLanguage() {
        const { activeLanguage } = this.props;

        if (!activeLanguage) {
            return;
        }

        import(`../../resources/${activeLanguage.code}.resources.json`)
            .then(translations => {
                this.props.addTranslationForLanguage(translations, activeLanguage.code)
            });
    }
    getClass(languageCode, activeLanguage) {
        return languageCode === activeLanguage.code ? 'active' : ''
    }

    onChange(event) {
        const { setActiveLanguage } = this.props;
        setActiveLanguage(event.target.value)
    }

    render() {
        const { languages, activeLanguage, setActiveLanguage } = this.props;
        return (
            <select className="selector" onChange={this.onChange.bind(this)} value={activeLanguage && activeLanguage.code}>
                {languages.map(lang =>
                    <option key={lang.code}
                        className={this.getClass(lang.code, activeLanguage)} value={lang.code} >
                        {lang.name}
                    </option>
                )}
            </select>
        );
    };
}


export default withLocalize(LanguageToggle);