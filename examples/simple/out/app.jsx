import React from 'react';
import {
    I18N,
    i18n,
    CONTEXT_TYPES,
    setLocale,
    setMessages
} from '../../components';
import spanish from './bundle-es';
import french from './bundle-fr';
const messages = {
    es: spanish,
    fr: french,
    en: {}
};
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { locale: 'en' };
    }
    componentWillMount() {
        this.setLocale(this.state.locale);
    }
    localeChanged(event) {
        this.setLocale(event.target.value);
    }
    setLocale(locale) {
        setLocale(locale);
        setMessages(messages[locale]);
        this.setState({ locale });
    }
    render(thing = {}) {
        var thing = i18n('awesome?');
        var ugh = /ugh/;
        return (
            <div>
            <header>
                <h1><I18N
                            message={'Translated <span:hello>{thing}</span:hello> Application'}
                            context={this}
                            args={[thing]}
                            fallback={function () {
                                return <span>Translated <span className="hello">{thing}</span> Application</span>;
                            }} /></h1>
                <I18N
                        message={'Choose locale:'}
                        context={this}
                        args={[]}
                        fallback={function () {
                            return <span>Choose locale:</span>;
                        }} /> <select onChange={this.localeChanged.bind(this)}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                </select>
            </header>
            <main>
                <Page />
            </main>
        </div>
        );
    }
}
App.childContextTypes = CONTEXT_TYPES;
class Stupid extends React.Component {
    render() {
        return (
            <I18N
                message={'STUPID'}
                context={this}
                args={[]}
                fallback={function () {
                    return <span>STUPID</span>;
                }} />
        );
    }
}
class Page extends React.Component {
    render() {
        return (
            <I18N
                message={'Hello, <Stupid /> world!'}
                context={this}
                args={[Stupid]}
                fallback={function () {
                    return <span>Hello, <Stupid foo="bar" bar={{ foo: 'bar' }} /> world!</span>;
                }} />
        );
    }
}
React.render(<App />, document.getElementById('root'));
export default App
