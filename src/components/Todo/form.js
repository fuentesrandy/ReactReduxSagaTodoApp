import "./list.css"
import React, { Fragment } from "react"
import { Formik, Field } from 'formik';
import * as Yup from "yup"


const TodoForm = ({ onSubmit, todo = {} }) => {

    return <Formik
        initialValues={{ ...todo }}
        onSubmit={(values, actions) => {
            onSubmit(values, actions.setSubmitting, actions.resetForm);
        }}
        validationSchema={Yup.object().shape({
            description: Yup.string().required('Required'),
        })}>
        {props => {
            const {
                values,
                touched,
                errors,
                dirty,
                isValid,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                handleReset,
            } = props;
            return (<form noValidate onSubmit={handleSubmit} >
                <div className="row">
                    <div className="col-lg-12">
                        <textarea
                            type="text"
                            name="description"
                            disabled={isSubmitting}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description || ''}
                            placeholder="Enter todo" style={{ width: '100%', resize: 'none', rows: 3 }} ></textarea>

                        {errors.description && <div className="text-danger">{errors.description}</div>}

                    </div>
                    <div className="col-lg-12">
                        <button type="submit"
                            style={{ marginTop: '5px' }}
                            disabled={isSubmitting || isValid === false}
                            className="float-right btn btn-primary">Add</button>
                    </div>
                </div>
            </form>);
        }}
    </Formik>
}

export default TodoForm;

