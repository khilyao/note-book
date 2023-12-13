import { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string, number } from 'yup';
import { v4 as uuidv4 } from 'uuid';
import notebookAPI from 'services/notebookAPI';
import { modalContext } from 'contexts/context';

const ClientForm = ({ formType }) => {
    const {
        toggleModal,
        setGetClients,
        clientInfo: { id, name, lessonsPerWeek, price },
    } = useContext(modalContext);

    const nameInputId = uuidv4();
    const lessonsPerWeekId = uuidv4();
    const priceId = uuidv4();

    const validationSchema = object({
        name: string().trim().required(),
        lessonsPerWeek: number().required(),
        price: number().required(),
    });

    const handleSubmit = (client, { setSubmitting, resetForm }) => {
        if (formType === 'addClient') {
            notebookAPI.addClient(client).then(() => {
                setGetClients([]);
                resetForm();
                toggleModal();
                setSubmitting(false);
            });
        }

        if (formType === 'editClient') {
            notebookAPI.updateClientInfo(id, client).then(() => {
                setGetClients([]);
                resetForm();
                toggleModal();
                setSubmitting(false);
            });
        }
    };

    return (
        <>
            {formType === 'addClient' && (
                <Formik
                    initialValues={{ name: '', lessonsPerWeek: '', price: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div>
                            <label htmlFor={nameInputId}>Name</label>
                            <Field name="name" id={nameInputId} type="text" />
                            <ErrorMessage name="name" />
                        </div>
                        <div>
                            <label htmlFor={lessonsPerWeekId}>
                                Lessons per week
                            </label>
                            <Field
                                name="lessonsPerWeek"
                                id={lessonsPerWeekId}
                                type="number"
                            />
                            <ErrorMessage name="lessonsPerWeek" />
                        </div>
                        <div>
                            <label htmlFor={priceId}>Price</label>
                            <Field name="price" id={priceId} type="number" />
                            <ErrorMessage name="price" />
                        </div>
                        <button type="submit">Add client</button>
                    </Form>
                </Formik>
            )}

            {formType === 'editClient' && (
                <Formik
                    initialValues={{ name, lessonsPerWeek, price }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div>
                            <label htmlFor={nameInputId}>Name</label>
                            <Field name="name" id={nameInputId} type="text" />
                            <ErrorMessage name="name" />
                        </div>
                        <div>
                            <label htmlFor={lessonsPerWeekId}>
                                Lessons per week
                            </label>
                            <Field
                                name="lessonsPerWeek"
                                id={lessonsPerWeekId}
                                type="number"
                            />
                            <ErrorMessage name="lessonsPerWeek" />
                        </div>
                        <div>
                            <label htmlFor={priceId}>Price</label>
                            <Field name="price" id={priceId} type="number" />
                            <ErrorMessage name="price" />
                        </div>
                        <button type="submit">Add client</button>
                    </Form>
                </Formik>
            )}
        </>
    );
};

export default ClientForm;
