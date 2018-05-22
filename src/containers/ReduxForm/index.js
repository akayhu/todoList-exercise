import React from 'react';
import { Field, reduxForm } from 'redux-form';
import ShowResults from '../../components/ShowResults';
import { Values } from "redux-form-website-template";
import './index.css';

const SimpleForm = props => {
	const { pristine, reset, submitting } = props;
	return (
		<div className="formMain">
			<form onSubmit={ ShowResults }>
				<div>
					<label>名字</label>
					<div>
						<Field
							name="firstName"
							component="input"
							type="text"
							placeholder="名字"
						/>
					</div>
				</div>
				<div>
					<label>姓別</label>
					<div>
						<Field
							name="lastName"
							component="input"
							type="text"
							placeholder="姓別"
						/>
					</div>
				</div>
				<div>
					<label>電子信箱</label>
					<div>
						<Field
							name="email"
							component="input"
							type="email"
							placeholder="Email"
						/>
					</div>
				</div>
				<div>
					<label>性別</label>
					<div>
						<label>
							<Field
								name="sex"
								component="input"
								type="radio"
								value="male"
							/>{' '}
							男
						</label>
						<label>
							<Field
								name="sex"
								component="input"
								type="radio"
								value="female"
							/>{' '}
							女
						</label>
					</div>
				</div>
				<div>
					<label>喜歡的顏色</label>
					<div>
						<Field name="favoriteColor" component="select">
							<option value="0">請選擇</option>
							<option value="ff0000">紅色</option>
							<option value="00ff00">綠色</option>
							<option value="0000ff">藍色</option>
						</Field>
					</div>
				</div>
				<div>
					<label htmlFor="employed">是否就業</label>
					<div>
						<Field
							name="employed"
							id="employed"
							component="input"
							type="checkbox"
						/>
					</div>
				</div>
				<div>
					<label>筆記</label>
					<div>
						<Field name="notes" component="textarea" />
					</div>
				</div>
				<div>
					<button type="submit" disabled={ pristine || submitting }>
						送出
					</button>
					<button type="button" disabled={ pristine || submitting } onClick={ reset }>
						清除
					</button>
				</div>
			</form>
			<Values form="simple" />
		</div>
	)
};

export default reduxForm({
	form: 'simple' // 表單的識別
})(SimpleForm)