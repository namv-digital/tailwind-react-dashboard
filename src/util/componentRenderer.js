import FormCheckbox from "../components/shared/FormCheckbox";
import FormInput from "../components/shared/FormInput";
import FormSelect from "../components/shared/FormSelect";
import FormWebsite from "../components/shared/FormWebsite";
import FormPhotoUpload from "../components/shared/FormPhotoUpload";
import FormFileUploader from "../components/shared/FormFileUploader";
import FormTextArea from "../components/shared/FormTextArea";
import SearchInput from "../components/shared/SearchInput";
import InlineRadioButtons from "../components/shared/InlineRadioButtons";

export const renderSearchInput = (formProps, config, classes = {}) => {
  return <SearchInput {...formProps} {...config} {...classes} />;
};

export const renderInlineRadioButtons = (formProps, config, classes = {}) => {
  return <InlineRadioButtons {...formProps} {...config} {...classes} />;
};

export const renderCheckbox = (formProps, config, classes = {}) => {
  return <FormCheckbox {...formProps} {...config} {...classes} />;
};

export const renderFormInput = (formProps, config) => {
  return <FormInput {...formProps} {...config} />;
};

export const renderWebsiteInput = (formProps, config) => {
  return <FormWebsite {...formProps} {...config} />;
};

export const renderPhotoUpload = (formProps, config) => {
  return <FormPhotoUpload {...formProps} {...config} />;
};

export const renderFileUpload = (formProps, config) => {
  return <FormFileUploader {...formProps} {...config} />;
};

export const renderDropdown = (formProps, config) => {
  return <FormSelect {...formProps} {...config} />;
};

export const renderTextArea = (formProps, config) => {
  return <FormTextArea {...formProps} {...config} />;
};
