import React from "react";
import { Field } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import MultiStep from "../shared/MultiStep";
import { Modal } from "../shared/Modal";
import FormHeader from "../shared/FormHeader";
import {
  PREFERENCES_TITLE,
  PREFERENCES_DESCRIPTION,
} from "../../util/constants";
import {
  AREAS_OF_EXPERTISE_CONFIG,
  DEGREE_SELECT_CONFIG,
  EMPLOYER_SEARCH_CONFIG,
  END_DATE_INPUT_CONFIG,
  FIRST_JOB_CHECKBOX_CONFIG,
  GENDER_SELECT_CONFIG,
  JOB_STAGE_RADIO_CONFIG,
  JOB_TITLE_INPUT_CONFIG,
  LINKEDIN_URL_CONFIG,
  LOCATION_SEARCH_CONFIG,
  MAJOR_SEARCH_CONFIG,
  USER_PHOTO_UPLOAD_CONFIG,
  PRONOUN_SELECT_CONFIG,
  RACE_CHECKBOX_CONFIG,
  RESUME_UPLOAD_CONFIG,
  ROLE_SEARCH_CONFIG,
  SCHOOL_SEARCH_CONFIG,
  SELF_TAUGHT_CHECKBOX_CONFIG,
  START_DATE_INPUT_CONFIG,
  TOP_SKILLS_CONFIG,
  YOE_RADIO_CONFIG,
  WORK_AUTH_RADIO_CONFIG,
  DISABILITY_RADIO_CONFIG,
  SPONSORSHIP_RADIO_CONFIG,
  VETERAN_RADIO_CONFIG,
  CURRENT_LOCATION_SEARCH_CONFIG,
} from "../shared/data";
import {
  renderSearchInput,
  renderInlineRadioButtons,
  renderCheckbox,
  renderFormInput,
  renderWebsiteInput,
  renderPhotoUpload,
  renderFileUpload,
  renderDropdown,
} from "../../util/componentRenderer";
import FormSectionDivider from "../shared/FormSectionDivider";
import Steps from "../shared/Steps";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

const required = (value) => (value ? undefined : "Required");

const fieldAdditionalClasses = {
  labelClassName: "text-2xl font-medium text-gray-900",
  subLabelClassName: "text-xs font-medium leading-5 text-gray-500 mb-5",
};

const UserProfileCreate = () => {
  const [pageNo, setPageNo] = React.useState(0);

  return (
    <Modal>
      <Steps currentPageNo={pageNo} />
      <MultiStep
        initialValues={{}}
        onSubmit={onSubmit}
        updatePageNo={(newPageNo) => setPageNo(newPageNo)}
      >
        <MultiStep.Page
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.roleSearch) {
        //     errors.roleSearch = "Required";
        //   }
        //   if (!values.locationSearch) {
        //     errors.locationSearch = "Required";
        //   }
        //   if (!values.yearsOfExp) {
        //     errors.yearsOfExp = "Required";
        //   }
        //   if (!values.jobStage) {
        //     errors.jobStage = "Required";
        //   }
        //   return errors;
        // }}
        >
          <div>
            <FormHeader
              title={PREFERENCES_TITLE}
              description={PREFERENCES_DESCRIPTION}
              className="mt-16 mb-10"
            />

            <div className="space-y-6 sm:space-y-8">
              <div className="sm:items-start">
                <Field
                  name="roleSearch"
                  type="roleSearch"
                  component={(formProps) =>
                    renderSearchInput(
                      formProps,
                      ROLE_SEARCH_CONFIG,
                      fieldAdditionalClasses
                    )
                  }
                />
                <Error name="roleSearch" />
              </div>

              <div className="sm:items-start">
                <Field
                  name="yearsOfExp"
                  type="yearsOfExp"
                  component={(formProps) =>
                    renderInlineRadioButtons(
                      formProps,
                      YOE_RADIO_CONFIG,
                      fieldAdditionalClasses
                    )
                  }
                />
                <Error name="yearsOfExp" />
              </div>

              <div className="sm:items-start">
                <Field
                  name="locationSearch"
                  type="locationSearch"
                  component={(formProps) =>
                    renderSearchInput(
                      formProps,
                      LOCATION_SEARCH_CONFIG,
                      fieldAdditionalClasses
                    )
                  }
                />
                <Error name="locationSearch" />
              </div>

              <div className="sm:items-start">
                <Field
                  name="jobStage"
                  type="jobStage"
                  component={(formProps) =>
                    renderInlineRadioButtons(
                      formProps,
                      JOB_STAGE_RADIO_CONFIG,
                      fieldAdditionalClasses
                    )
                  }
                />
                <Error name="jobStage" />
              </div>
            </div>
          </div>
        </MultiStep.Page>
        <MultiStep.Page>
          <FormHeader
            title="Work Experience"
            description="Add most recent work experiences. You can add more to your profile later."
            className="mt-16 mb-10"
          />
          <div className="space-y-6 sm:space-y-8">
            <div className="sm:items-start">
              <FieldArray
                name="isFirstJob"
                type="isFirstJob"
                component={(formProps) =>
                  renderCheckbox(formProps, FIRST_JOB_CHECKBOX_CONFIG)
                }
              />
              <Error name="isFirstJob" />
            </div>
            <div className="sm:items-start">
              <Field
                name="employerSearch"
                type="employerSearch"
                component={(formProps) =>
                  renderSearchInput(
                    formProps,
                    EMPLOYER_SEARCH_CONFIG,
                    fieldAdditionalClasses
                  )
                }
              />
              <Error name="employerSearch" />
            </div>
            <div className="sm:items-start">
              <Field
                name="jobTitle"
                type="jobTitle"
                component={(formProps) =>
                  renderFormInput(
                    formProps,
                    JOB_TITLE_INPUT_CONFIG,
                    fieldAdditionalClasses
                  )
                }
              />
              <Error name="jobTitle" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="sm:items-start">
                <Field
                  name="jobStartDate"
                  type="jobStartDate"
                  component={(formProps) =>
                    renderFormInput(
                      formProps,
                      START_DATE_INPUT_CONFIG,
                      fieldAdditionalClasses
                    )
                  }
                />
                <Error name="jobStartDate" />
              </div>

              <div className="sm:items-start">
                <Field
                  name="jobEndDate"
                  type="jobEndDate"
                  component={(formProps) =>
                    renderFormInput(
                      formProps,
                      END_DATE_INPUT_CONFIG,
                      fieldAdditionalClasses
                    )
                  }
                />
                <Error name="jobEndDate" />
              </div>
            </div>
          </div>

          <FormHeader
            title="Education"
            description=""
            className="mt-16 mb-10"
          />
          <div className="space-y-6 sm:space-y-8">
            <div className="sm:items-start">
              <FieldArray
                name="selfTaught"
                type="selfTaught"
                component={(formProps) =>
                  renderCheckbox(formProps, SELF_TAUGHT_CHECKBOX_CONFIG)
                }
              />
              <Error name="selfTaught" />
            </div>

            <div className="sm:items-start">
              <Field
                name="school"
                type="school"
                component={(formProps) =>
                  renderSearchInput(
                    formProps,
                    SCHOOL_SEARCH_CONFIG,
                    fieldAdditionalClasses
                  )
                }
              />
              <Error name="school" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="sm:items-start">
                <Field
                  name="schoolStartDate"
                  type="schoolStartDate"
                  component={(formProps) =>
                    renderFormInput(formProps, START_DATE_INPUT_CONFIG)
                  }
                />
                <Error name="schoolStartDate" />
              </div>

              <div className="sm:items-start">
                <Field
                  name="schoolEndDate"
                  type="schoolEndDate"
                  component={(formProps) =>
                    renderFormInput(formProps, END_DATE_INPUT_CONFIG)
                  }
                />
                <Error name="schoolEndDate" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="sm:items-start">
                <Field
                  name="degree"
                  type="degree"
                  component={(formProps) =>
                    renderDropdown(formProps, DEGREE_SELECT_CONFIG)
                  }
                />
                <Error name="degree" />
              </div>
              <div className="sm:items-start">
                <Field
                  name="majors"
                  type="majors"
                  component={(formProps) =>
                    renderDropdown(formProps, MAJOR_SEARCH_CONFIG)
                  }
                />
                <Error name="majors" />
              </div>
            </div>
          </div>
        </MultiStep.Page>
        <MultiStep.Page>
          <FormHeader
            title="Skills"
            description="Recruiters can search through profiles based off certain skills for a role so be sure to represent your full abilities here."
            className="mt-16 mb-10"
          />

          <div className="space-y-6 sm:space-y-8">
            <div className="sm:items-start">
              <Field
                name="expertise"
                type="expertise"
                component={(formProps) =>
                  renderSearchInput(
                    formProps,
                    AREAS_OF_EXPERTISE_CONFIG,
                    fieldAdditionalClasses
                  )
                }
              />
              <Error name="expertise" />
            </div>

            <div className="sm:items-start">
              <Field
                name="skills"
                type="skills"
                component={(formProps) =>
                  renderSearchInput(
                    formProps,
                    TOP_SKILLS_CONFIG,
                    fieldAdditionalClasses
                  )
                }
              />
              <Error name="skills" />
            </div>

            <div className="sm:items-start">
              <Field
                name="linkedinUrl"
                type="linkedinUrl"
                component={(formProps) =>
                  renderWebsiteInput(formProps, LINKEDIN_URL_CONFIG)
                }
              />
              <Error name="linkedinUrl" />
            </div>

            <div className="sm:items-start">
              <Field
                name="resume"
                type="resume"
                component={(formProps) =>
                  renderFileUpload(formProps, RESUME_UPLOAD_CONFIG)
                }
              />
              <Error name="resume" />
            </div>
          </div>
        </MultiStep.Page>
        <MultiStep.Page>
          <FormHeader
            title="Personal Information"
            description="Some information so that recruiters can identify you"
            className="mt-16 mb-10"
          />
          <div className="space-y-6 sm:space-y-8">
            <div className="sm:items-start">
              <Field
                name="photoUpload"
                type="photoUpload"
                component={(formProps) =>
                  renderPhotoUpload(formProps, USER_PHOTO_UPLOAD_CONFIG)
                }
              />
              <Error name="photoUpload" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="sm:items-start">
                <Field
                  name="pronoun"
                  type="pronoun"
                  component={(formProps) =>
                    renderDropdown(formProps, PRONOUN_SELECT_CONFIG)
                  }
                />
                <Error name="pronoun" />
              </div>

              <div className="sm:items-start">
                <Field
                  name="gender"
                  type="gender"
                  component={(formProps) =>
                    renderDropdown(formProps, GENDER_SELECT_CONFIG)
                  }
                />
                <Error name="gender" />
              </div>
            </div>
            <div className="sm:items-start">
              <FieldArray
                name="race"
                type="race"
                className="custom-control-input"
                component={(formProps) =>
                  renderCheckbox(
                    formProps,
                    RACE_CHECKBOX_CONFIG,
                    fieldAdditionalClasses
                  )
                }
              />
              <Error name="race" />
            </div>

            <div className="sm:items-start">
              <Field
                name="veteran"
                type="veteran"
                component={(formProps) =>
                  renderInlineRadioButtons(
                    formProps,
                    VETERAN_RADIO_CONFIG,
                    fieldAdditionalClasses
                  )
                }
              />
              <Error name="veteran" />
            </div>

            <div className="sm:items-start">
              <Field
                name="disability"
                type="disability"
                component={(formProps) =>
                  renderInlineRadioButtons(
                    formProps,
                    DISABILITY_RADIO_CONFIG,
                    fieldAdditionalClasses
                  )
                }
              />
              <Error name="disability" />
            </div>

            <div className="sm:items-start">
              <Field
                name="currentLocation"
                type="currentLocation"
                component={(formProps) =>
                  renderSearchInput(
                    formProps,
                    CURRENT_LOCATION_SEARCH_CONFIG,
                    fieldAdditionalClasses
                  )
                }
              />
              <Error name="currentLocation" />
            </div>

            <div className="sm:items-start">
              <Field
                name="canWorkInUs"
                type="canWorkInUs"
                component={(formProps) =>
                  renderInlineRadioButtons(
                    formProps,
                    WORK_AUTH_RADIO_CONFIG,
                    fieldAdditionalClasses
                  )
                }
              />
              <Error name="canWorkInUs" />
            </div>

            <div className="sm:items-start">
              <Field
                name="needsSponsorship"
                type="needsSponsorship"
                component={(formProps) =>
                  renderInlineRadioButtons(
                    formProps,
                    SPONSORSHIP_RADIO_CONFIG,
                    fieldAdditionalClasses
                  )
                }
              />
              <Error name="needsSponsorship" />
            </div>
          </div>
        </MultiStep.Page>
      </MultiStep>
    </Modal>
  );
};

export default UserProfileCreate;
