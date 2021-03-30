import React from 'react'
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form'
import { logInThunkCreator } from './../../../redux/login-reducer'
import LoaderProcess from './../../LoaderProcess/LoaderProcess'
import withLoginRedirect from './../../../hoc/withLoginRedirect'
import { compose } from 'redux'
import { required } from './../../../utils/validators'
import classes from './LoginPage.module.css'

const LoginForm = (props) => {
  const captchaForm = () => {
    return (
            <div>
                                <img src={props.captchaUrl}></img>
                                <Field name="captcha" validate={required} >
                            {({ input, meta }) => (
                                    <div>
                                        <input {...input} placeholder="Captcha" type="text" className={meta.error && meta.touched ? classes.error_input : classes.input}/>
                                        {meta.error && meta.touched && <span className={classes.error}>{meta.error}</span>}
                                    </div>

                            )

                                }
                            </Field>
                            </div>
    )
  }

  return (
        <div className={classes.form} >

            <Form

                onSubmit={props.onSubmit}
                render={({ handleSubmit }) => (

                    <form onSubmit={handleSubmit}>

                        <h2>Login: </h2>
                        <div>
                            <Field className={classes.form_control} name="email" validate={required} >
                                {({ input, meta }) => (
                                    <div>

                                        <input {...input} type="text" placeholder="Login" className={meta.error && meta.touched ? classes.error_input : classes.input} />
                                        {meta.error && meta.touched && <span className={classes.error}>{meta.error}</span>}
                                    </div>

                                )

                                }

                            </Field>
                        </div>
                        <div>
                            <Field name="password" validate={required} >
                            {({ input, meta }) => (
                                    <div>
                                        <input {...input} placeholder="Password" type="password" className={meta.error && meta.touched ? classes.error_input : classes.input}/>
                                        {meta.error && meta.touched && <span className={classes.error}>{meta.error}</span>}
                                    </div>

                            )

                                }
                            </Field>
                        </div>
                        <div>
                            <Field name="rememberMe" component="input" type="Checkbox" />
                Remember me
            </div>

                        {props.captchaUrl ? captchaForm() : null}
                        <button type="submit">Submit</button> <span className={classes.error}>{props.errorLog ? props.errorLog : null}</span>
                    </form>

                )}
            />
        </div>
  )
}

const LoginPage = (props) => {
  const onSubmit = (data) => {
    props.loginThunk(data)
  }

  return (
        <div>

            {console.log(props)}
            {props.loginInProgress ? <LoaderProcess /> : <LoginForm onSubmit={onSubmit} errorLog={props.errorLog} captchaUrl={props.captchaUrl} />}

        </div>
  )
}

const mapPropsToState = (state) => {
  return ({
    loginInProgress: state.loginForm.loginInProgress,
    isFetched: state.loginForm.isFetched,
    errorLog: state.loginForm.errorLog,
    captchaUrl: state.loginForm.captchaUrl
  })
}

const LoginPageContainer = compose(
  withLoginRedirect,
  connect(mapPropsToState, { loginThunk: logInThunkCreator })
)(LoginPage)

export default LoginPageContainer
