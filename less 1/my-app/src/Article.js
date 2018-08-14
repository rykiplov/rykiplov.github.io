import React, {Component} from 'react'

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
        this.toggleOpen = this.toggleOpen.bind(this) //необходимо для того, чтобы внутри функции toggleOpen() или можно использовать синтаксис stage-0 (смотреть перед методом toggleOpen())
    }

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = { this.toggleOpen } >
                    {isOpen ? "close" : "open" }
                </button>
                {this.getBody()}
            </div>
        )
    }

    // пример записи stage-0 для того, чтобы использовать this внутри этого метода без ошибок
    // toggleOpen = () => {
    //
    // }
    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    getBody() {
        if(!this.state.isOpen) return null;
        const {article} = this.props;
        return <section>{article.text}</section>
    }
}




//Описание с помощью FUNCTION COMPONENTS DECLARATION
// export default function Article(props) {
// 	const {article} = props;
// 	console.log('---', props);
// 	return (
// 			<div>
// 				<h3>{article.title}</h3>
// 				<section>{article.text}</section>
// 			</div>
// 	)
// }