import { useContext, useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
    StyledForm,
    StyledField,
    FieldWrapper,
    StyledBtn,
    CounterWrapper,
    StyledLabel,
    ButtonsWrapper,
    StyledErrorMsg,
    StyledPlusIcon,
    StyledMinusIcon,
} from './ClientForm.styled';
import { object, string, number, boolean } from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { modalContext } from 'contexts/context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import notebookAPI from 'services/notebookAPI';
import CounterButton from 'components/CounterButton/CounterButton';
import WeekdayPicker from 'components/WeekdayPicker/WeekdayPicker';

const ClientForm = ({ formType }) => {
    const {
        toggleModal,
        setGetClients,
        setIsAddClientBtn,
        setIsEditClientBtn,
        clientInfo: {
            id,
            name,
            lessonsPerWeek,
            price,
            paidHours,
            lessonsDate,
            lessonsPayment,
        },
    } = useContext(modalContext);
    const initialSelectedWeekDays = formType === 'addClient' ? [] : lessonsDate;
    const [previousPaidHoursValue] = useState(paidHours);
    const [selectedWeekdays, setSelectedWeekdays] = useState(
        initialSelectedWeekDays
    );
    // const [isLessonChecked, setIsLessonChecked] = useState(false);

    const notifyUser = () => {
        const options = {
            theme: 'colored',
            autoClose: 1500,
            closeOnClick: true,
            hideProgressBar: true,
        };

        if (formType === 'addClient') {
            toast.success('Client was added', options);
            return;
        }

        toast.success('Information was updated', options);
    };

    const nameInputId = uuidv4();
    const lessonsPerWeekId = uuidv4();
    const priceId = uuidv4();
    const paidHoursId = uuidv4();

    const validationSchema = object({
        name: string().trim().required(),
        lessonsPerWeek: number().required(),
        price: number().required(),
        paidHours: number(),
        isLessonChecked: boolean(),
    });

    const currentFormType =
        formType === 'addClient' ? 'addClient' : 'editClient';

    const handleSubmit = (client, { setSubmitting, resetForm }) => {
        const newClient = { ...client, lessonsDate: selectedWeekdays };

        const formActions = () => {
            setGetClients([]);
            resetForm();
            toggleModal();
            setIsAddClientBtn(false);
            setIsEditClientBtn(false);
            setSubmitting(false);
            notifyUser();
        };

        formType === 'addClient'
            ? notebookAPI.addClient(newClient).then(formActions)
            : notebookAPI.updateClientInfo(id, newClient).then(formActions);
    };

    const deleteClient = () => {
        notebookAPI.deleteClient(id).then(() => {
            toggleModal();
            setIsEditClientBtn(false);
            notifyUser();
            setGetClients([]);
        });
    };

    const defineInitialValues = () => {
        if (currentFormType === 'addClient') {
            return {
                name: '',
                lessonsPerWeek: '',
                price: '',
                paidHours: '',
            };
        }

        return {
            name,
            lessonsPerWeek,
            price,
            paidHours,
            lessonsDate,
            lessonsPayment,
            previousPaidHoursValue,
        };
    };

    return (
        <>
            <Formik
                initialValues={defineInitialValues()}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values: { paidHours }, setFieldValue }) => (
                    <StyledForm>
                        <FieldWrapper>
                            <StyledLabel htmlFor={nameInputId}>
                                Name
                            </StyledLabel>
                            <StyledField
                                name="name"
                                id={nameInputId}
                                type="text"
                                placeholder="David"
                            />
                            <ErrorMessage name="name">
                                <StyledErrorMsg>
                                    *required field*
                                </StyledErrorMsg>
                            </ErrorMessage>
                        </FieldWrapper>
                        <FieldWrapper>
                            <StyledLabel htmlFor={lessonsPerWeekId}>
                                Lessons per week
                            </StyledLabel>
                            <StyledField
                                name="lessonsPerWeek"
                                id={lessonsPerWeekId}
                                type="number"
                                placeholder="4"
                            />
                            <ErrorMessage name="lessonsPerWeek">
                                <StyledErrorMsg>*required field</StyledErrorMsg>
                            </ErrorMessage>
                        </FieldWrapper>
                        <FieldWrapper>
                            <StyledLabel htmlFor={priceId}>Price</StyledLabel>
                            <StyledField
                                name="price"
                                id={priceId}
                                type="number"
                                placeholder="200"
                            />
                            <ErrorMessage name="price">
                                <StyledErrorMsg>*required field</StyledErrorMsg>
                            </ErrorMessage>
                        </FieldWrapper>
                        <FieldWrapper>
                            <StyledLabel htmlFor={paidHoursId}>
                                Paid Hours
                            </StyledLabel>
                            <StyledField
                                name="paidHours"
                                id={paidHoursId}
                                type="number"
                                placeholder="0"
                            />
                            {currentFormType === 'editClient' && (
                                <CounterWrapper>
                                    <CounterButton
                                        onClick={() => {
                                            setFieldValue(
                                                'paidHours',
                                                Number(paidHours) + 1
                                            );
                                        }}
                                    >
                                        <StyledPlusIcon />
                                    </CounterButton>
                                    <CounterButton
                                        onClick={() => {
                                            setFieldValue(
                                                'paidHours',
                                                Number(paidHours) - 1
                                            );
                                        }}
                                    >
                                        <StyledMinusIcon />
                                    </CounterButton>
                                </CounterWrapper>
                            )}
                        </FieldWrapper>
                        {/* {currentFormType === 'editClient' && (
                            <StyledField
                                name="isLessonChecked"
                                type="checkbox"
                                checked={isLessonChecked}
                                onChange={() => {
                                    setIsLessonChecked(
                                        prevIsLessonChecked =>
                                            !prevIsLessonChecked
                                    );
                                }}
                            />
                        )} */}
                        {/* {currentFormType === 'editClient' && (
                            <FieldWrapper>
                                <StyledLabel htmlFor={lessonDurationId}>
                                    Lesson duration
                                </StyledLabel>
                                <StyledField
                                    name="duration"
                                    id={lessonDurationId}
                                    type="number"
                                    placeholder="0"
                                />
                            </FieldWrapper>
                        )} */}
                        <FieldWrapper>
                            <StyledLabel htmlFor={priceId}>Date</StyledLabel>
                            <WeekdayPicker
                                selectedWeekdays={selectedWeekdays}
                                setSelectedWeekdays={setSelectedWeekdays}
                            />
                        </FieldWrapper>
                        <ButtonsWrapper>
                            <StyledBtn type="submit">
                                {currentFormType === 'addClient'
                                    ? 'Add Client'
                                    : 'Apply'}
                            </StyledBtn>
                            {currentFormType === 'editClient' && (
                                <StyledBtn
                                    onClick={deleteClient}
                                    $delete
                                    style={{ marginLeft: '20px' }}
                                    type="button"
                                >
                                    Delete
                                </StyledBtn>
                            )}
                        </ButtonsWrapper>
                    </StyledForm>
                )}
            </Formik>
        </>
    );
};

export default ClientForm;
