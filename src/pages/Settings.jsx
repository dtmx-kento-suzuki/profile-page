import React from "react";
import { FormInput } from "./../components/FormInput";
import { FormRadio } from "./../components/FormRadio";
import { FormProfilePhoto } from "./../components/FormProfilePhoto";
import { Button } from "./../components/Button";
import * as Yup from "yup";
import { Formik, Form } from "formik";

const validationSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string()
    .email("Valid email is required")
    .required("Email is required"),
  birthMonth: Yup.number("Should be an number")
    .min(1, "Month must be 1-12.")
    .max(12, "Month must be 1-12."),
  birthDate: Yup.number()
    .min(1, "Day must be at least 1920.")
    .max(31, "Day must be at under 31."),
  birthYear: Yup.number()
    .min(1920, "Year must be over 1920.")
    .max(new Date().getFullYear() - 13, "You must be at least 13years old."),
  gender: Yup.string().required("Gender is required"),
});

const genderData = [
  {
    id: "male",
    title: "Male",
  },
  {
    id: "female",
    title: "Female",
  },
  {
    id: "none",
    title: "Non-binary",
  },
];

export const Settings = () => {
  return (
    <div className="settings-page">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          birthMonth: "",
          birthDate: "",
          birthYear: "",
          gender: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {}}
      >
        {({ isSubmitting, touched }) => {
          return (
            <Form>
              <div className="row">
                <div className="col-4">
                  <div className="profile-image-container">
                    <div className="col-12 label-text text-center">
                      Your Profile Picture
                    </div>
                    <FormProfilePhoto name="avatar" />
                  </div>
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-12 label-text">Name</div>
                    <FormInput
                      className="col-6 mt-2"
                      placeholder="First Name"
                      name="firstName"
                      isRequired
                    />
                    <FormInput
                      className="col-6 mt-2"
                      placeholder="Last Name"
                      name="lastName"
                      isRequired
                    />
                    <div className="col-12 label-text mt-3">
                      <span className="asterisk">*</span>
                      Email
                    </div>
                    <FormInput
                      className="col-12 mt-2"
                      placeholder="Enter Email"
                      name="email"
                      isRequired
                    />
                    <div className="col-12 label-text mt-3">
                      <span className="asterisk">*</span>
                      Gender
                    </div>
                    <div className="col-12">
                      <FormRadio values={genderData} name="gender" />
                    </div>
                    <div className="col-12 label-text mt-3">Date of birth</div>
                    <div className="col-4 mt-2">
                      <FormInput
                        className="w-100 mt-1"
                        placeholder="MM"
                        name="birthMonth"
                        textAlign="center"
                        isRequired
                      />
                    </div>
                    <div className="col-4 mt-2">
                      <FormInput
                        className="w-100 mt-1"
                        placeholder="DD"
                        name="birthDate"
                        textAlign="center"
                        isRequired
                      />
                    </div>

                    <div className="col-4 mt-2">
                      <FormInput
                        className="w-100 mt-1"
                        placeholder="YYYY"
                        name="birthYear"
                        textAlign="center"
                        isRequired
                      />
                    </div>
                    <div className="mt-3 col-6">
                      <Button
                        size="large"
                        buttonType="submit"
                        isLoading={isSubmitting}
                        style={{ width: 164 }}
                      >
                        Save changes
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
