import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => (
  <div>
        <h1 className='login-titre'>Connexion</h1>

        
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='form-cadre'>
          <p style = {{color : 'white'}}>E-mail : </p>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <p className='login-mdp' style = {{color : 'white'}}>Mot de passe : </p>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <br></br><br></br>
          <p id = "mdpoublie"><a href = "">Mot de passe oublié ?</a></p>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);


