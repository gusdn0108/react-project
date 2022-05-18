
import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';
import './SignUp.css';
import { AUTH_SIGNUP } from '../../common/path';
import { MAIN_API } from '../../lib/axios';
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});



    const validate = (data) => {
        let errors = {};

        if (!data.username) {
            errors.username = '닉네임을 입력해주세요';
        }

        if (!data.email) {
            errors.email = '이메일을 입력해주세요.';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            errors.email = '이메일형식으로 입력해주세요 예) example@naver.com';
        }

        if (!data.password) {
            errors.password = '패스워드를 입력해주세요';
        }

        if (!data.accept) {
            errors.accept = '약관에 동의해주세요 ';
        }

        return errors;
    };
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit = (data, form) => {
        // setFormData(data);
        // setShowMessage(true);

        // form.restart();
        console.log(data)
        MAIN_API(setIsLoading, AUTH_SIGNUP, (res) => {
            if (res.data.status) {
                navigate("/login")
            } else {
                alert(res.data.error)
            }
        },
            data
        )
    };

    const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
    const getFormErrorMessage = (meta) => {
        return isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>;
    };

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;
    const passwordHeader = <h6>패스워드 </h6>;
    const passwordFooter = (
        <React.Fragment>
            <Divider />
            <p className="mt-2">패스워드형식</p>
            <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: '1.5' }}>
                <li>소문자 하나를 포함해야합니다</li>
                <li>대문자 하나를 포함해야합니다</li>
                <li>특수문자 하나를 포함해야합니다</li>
                <li>8~16 자의 비밀번호가 필요합니다</li>
            </ul>
        </React.Fragment>
    );

    return (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-check-circle" style={{ fontSize: '5rem', color: 'var(--green-500)' }}></i>
                    <h5>회원가입이 완료되었습니다</h5>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        당신의 닉네임은 <b>{formData.username}</b> 입니다 <p> 아이디는  <b>{formData.email}</b> 입니다!</p>
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h5 className="text-center">회원가입</h5>
                    <Form onSubmit={onSubmit} initialValues={{ username: '', email: '', password: '', date: null, accept: false }} validate={validate} render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit} className="p-fluid">
                            <Field name="username" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <InputText id="username" {...input} autoFocus className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="username" className={classNames({ 'p-error': isFormFieldValid(meta) })}>닉네임</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="email" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label p-input-icon-right">
                                        <i className="pi pi-envelope" />
                                        <InputText id="email" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                        <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid(meta) })}>이메일</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="password" render={({ input, meta }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Password id="password" {...input} toggleMask className={classNames({ 'p-invalid': isFormFieldValid(meta) })} header={passwordHeader} footer={passwordFooter} />
                                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid(meta) })}>패스워드</label>
                                    </span>
                                    {getFormErrorMessage(meta)}
                                </div>
                            )} />
                            <Field name="date" render={({ input }) => (
                                <div className="field">
                                    <span className="p-float-label">
                                        <Calendar id="date" {...input} dateFormat="dd/mm/yy" mask="99/99/9999" showIcon />
                                        <label htmlFor="date">생일</label>
                                    </span>
                                </div>
                            )} />
                            <Field name="accept" type="checkbox" render={({ input, meta }) => (
                                <div className="field-checkbox">
                                    <Checkbox inputId="accept" {...input} className={classNames({ 'p-invalid': isFormFieldValid(meta) })} />
                                    <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid(meta) })}>약관에 동의하시겠습니까 ? </label>
                                </div>
                            )} />

                            <Button type="submit" label="회원가입" className="mt-2" />
                        </form>
                    )} />
                </div>
            </div>
        </div>
    );
}

export default SignUp