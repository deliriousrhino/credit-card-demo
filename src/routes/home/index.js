import { h, Component } from 'preact';
import style from './style';
import CreditCardInput from 'react-credit-card-input';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>CreditCardInput</h1>
				<p>The input below fails to render</p>
				<CreditCardInput />
			</div>
		);
	}
}
