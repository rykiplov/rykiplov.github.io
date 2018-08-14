import React from 'react'
import Article from './Article'

export default function ArticleList({articles}) {
	//Проходимся по каждому элементу статей, чтобы отобразить сразу все статьи (подобие цикла)
	const articleElements = articles.map((article) => <li key={article.id}><Article article = {article} /></li>);
	return (
			<ul>
				{articleElements}
			</ul>
	)
}