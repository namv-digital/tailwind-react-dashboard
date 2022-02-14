import React from "react";
import { Modal } from "../../components/shared/Modal";
import MultiStep from "../../components/shared/MultiStep";
import FormHeader from "../../components/shared/FormHeader";
import { Field } from "react-final-form";
import {
  renderPhotoUpload,
  renderFormInput,
  renderTextArea,
  renderDropdown,
} from "../../util/componentRenderer";

import {
  TEAM_PHOTO_UPLOAD_CONFIG,
  TEAM_NAME_INPUT_CONFIG,
  TEAM_PROJECT_URL_CONFIG,
  TEAM_DESCRIPTION_CONFIG,
  WORK_PREFERENCE_SELECT_CONFIG,
  JOB_CHOICE_OPTIONS,
  JOB_CHOICE_SELECT_CONFIG,
  BEST_DESCRIPTION_SELECT_CONFIG,
} from "../../components/shared/data";
import { InviteModal } from "../../components/Invitation/InviteModal";
import Steps from "../../components/shared/Steps";
import { useNavigate } from "react-router-dom";

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const required = (value) => (value ? undefined : "Required");

export default function TeamCreate() {
  const navigate = useNavigate();
  const [pageNo, setPageNo] = React.useState(0);

  const handleCloseModal = () => {
    navigate("/teams");
  };

  return (
    <Modal onModalClose={handleCloseModal}>
      <MultiStep
        initialValues={{}}
        onSubmit={onSubmit}
        updatePageNo={(newPageNo) => setPageNo(newPageNo)}
      >
        <MultiStep.Page>
          <FormHeader
            title="Create your first Team"
            description="You can create your team and invite team members here. If you don't have any in mind yet, you can skip this step and submit."
          />

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-4 sm:gap-5 sm:items-start sm:pt-5">
              <div className="mt-1 sm:mt-0 sm:col-span-4">
                <div className="max-w-lg flex rounded-md">
                  <Field
                    name="teamPhotoUpload"
                    type="teamPhotoUpload"
                    component={(formProps) =>
                      renderPhotoUpload(formProps, TEAM_PHOTO_UPLOAD_CONFIG)
                    }
                  />
                  <Error name="teamPhotoUpload" />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-4 sm:gap-5 sm:items-start sm:pt-5">
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md">
                  <Field
                    name="teamName"
                    type="teamName"
                    component={(formProps) =>
                      renderFormInput(formProps, TEAM_NAME_INPUT_CONFIG)
                    }
                  />
                  <Error name="teamName" />
                </div>
              </div>

              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="max-w-lg flex rounded-md">
                  <Field
                    name="teamProjectUrl"
                    type="teamProjectUrl"
                    component={(formProps) =>
                      renderFormInput(formProps, TEAM_PROJECT_URL_CONFIG)
                    }
                  />
                  <Error name="teamProjectUrl" />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-8 sm:gap-5 sm:items-start sm:pt-5">
              <div className="mt-1 sm:mt-0 sm:col-span-8">
                <div className="max-w-lg flex rounded-md">
                  <Field
                    name="teamDescription"
                    type="teamDescription"
                    component={(formProps) =>
                      renderTextArea(formProps, TEAM_DESCRIPTION_CONFIG)
                    }
                  />
                  <Error name="teamDescription" />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-8 sm:gap-5 sm:items-start sm:pt-5">
              <div className="mt-1 sm:mt-0 sm:col-span-8">
                <div className="max-w-lg flex rounded-md">
                  <Field
                    name="searchStage"
                    type="searchStage"
                    component={(formProps) =>
                      renderDropdown(formProps, JOB_CHOICE_SELECT_CONFIG)
                    }
                  />
                  <Error name="searchStage" />
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-8 sm:gap-5 sm:items-start sm:pt-5">
              <div className="mt-1 sm:mt-0 sm:col-span-8">
                <div className="max-w-lg flex rounded-md">
                  <Field
                    name="bestDescription"
                    type="bestDescription"
                    component={(formProps) =>
                      renderDropdown(formProps, BEST_DESCRIPTION_SELECT_CONFIG)
                    }
                  />
                  <Error name="bestDescription" />
                </div>
              </div>
            </div>
          </div>
        </MultiStep.Page>
        <MultiStep.Page>
          <InviteModal />
        </MultiStep.Page>
      </MultiStep>
    </Modal>
  );
}
