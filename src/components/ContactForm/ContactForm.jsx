import { Formik, Form, Field } from "formik";
import css from "./ContacForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const ContactForm = ({ addContact }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.number().required("Required").min(3, "Too Short!"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={addContact}
      validationSchema={FeedbackSchema}
    >
      {({ errors }) => {
        console.log(errors);
        return (
          <Form className={css.form}>
            <label className={css.label} htmlFor="contactName">
              <span>Name</span>
              <Field
                className={css.input}
                type="text"
                name="name"
                id="contactName"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="name"
                component="span"
              />
            </label>
            <label className={css.label} htmlFor="contactNumber">
              <span>Number</span>
              <Field
                className={css.input}
                type="number"
                name="number"
                id="contactNumber"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="number"
                component="span"
              />
            </label>
            <button className={css.submit} type="submit">
              Add Contact
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
