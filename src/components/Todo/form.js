import "./list.css"
import React, { Fragment } from "react"
import { Formik, Field } from 'formik';
import * as Yup from "yup"
import { Translate } from 'react-localize-redux';

const TodoForm = ({ onSubmit, todo = {}, isSubmitting }) => {

    return <Formik
        initialValues={{ ...todo }}
        onSubmit={(values, actions) => {
            onSubmit(values);
            actions.resetForm();
        }}
        validationSchema={Yup.object().shape({
            taskDescription: Yup.string().required('Required'),
        })}>
        {props => {
            const {
                values,
                touched,
                errors,
                dirty,
                isValid,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
            } = props;
            return (<form noValidate onSubmit={handleSubmit} >
                <Translate>
                    {({ translate }) => (
                        <div className="row">
                            <div className="col-lg-12">
                                <textarea
                                    type="text"
                                    name="taskDescription"
                                    disabled={isSubmitting}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.taskDescription || ''}
                                    placeholder={translate("Enter todo")} style={{ width: '100%', resize: 'none', rows: 3 }} ></textarea>

                                {errors.taskDescription && <div className="text-danger">{translate(errors.taskDescription)}</div>}

                            </div>
                            <div className="col-lg-12">
                                <button type="submit"
                                    style={{ marginTop: '5px' }}
                                    disabled={isSubmitting || isValid === false}
                                    className="float-right btn btn-primary"> {translate('Add')} </button>
                            </div>
                        </div>
                    )}

                </Translate>

            </form>);
        }}
    </Formik>
}

export default TodoForm;

