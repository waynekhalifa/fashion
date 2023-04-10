import useTranslation from "next-translate/useTranslation";
import { IFormField, IFormFieldsVariables } from "@/models/app";
import { InputTypes, Pages } from "@/constants/enums";

const useFormFields = (props: IFormFieldsVariables) => {
  const { slug } = props;
  const { t } = useTranslation("common");

  const loginFields = (): IFormField[] => [
    {
      label: t("email"),
      name: "email",
      type: InputTypes.TEXT,
      autoFocus: true,
    },
    {
      label: t("password"),
      name: "password",
      type: InputTypes.PASSWORD,
    },
  ];

  const registerFields = (): IFormField[] => [
    {
      label: t("firstName"),
      name: "given_name",
      type: InputTypes.TEXT,
      autoFocus: true,
    },
    {
      label: t("lastName"),
      name: "family_name",
      type: InputTypes.TEXT,
    },
    {
      label: t("email"),
      name: "email",
      type: InputTypes.TEXT,
    },
    // {
    //   label: t("socialNumber"),
    //   name: "socialNumber",
    //   type: InputTypes.TEXT,
    // },
    // {
    //   label: t("job"),
    //   name: "job",
    //   type: InputTypes.TEXT,
    // },
    {
      label: t("password"),
      name: "password",
      type: InputTypes.PASSWORD,
    },
    {
      label: t("confirmPassword"),
      name: "confirmPassword",
      type: InputTypes.PASSWORD,
    },
  ];

  const forgotFields = (): IFormField[] => [
    {
      label: t("email"),
      name: "email",
      type: InputTypes.TEXT,
      autoFocus: true,
    },
  ];

  const resetFields = (): IFormField[] => [
    {
      label: t("password"),
      name: "password",
      type: InputTypes.PASSWORD,
      autoFocus: true,
    },
    {
      label: t("confirmPassword"),
      name: "confirmPassword",
      type: InputTypes.PASSWORD,
    },
  ];

  const verificationFields = (): IFormField[] => [
    {
      label: "",
      name: "verificationCode",
      type: InputTypes.HIDDEN,
    },
  ];

  const getFormFields = (): IFormField[] => {
    switch (slug) {
      case Pages.LOGIN:
        return loginFields();
      case Pages.REGISTER:
        return registerFields();
      case Pages.FORGOT_PASSWORD:
        return forgotFields();
      case Pages.RESET_PASSWORD:
        return resetFields();
      case Pages.VERIFICATION_CODE:
        return verificationFields();
      default:
        return [];
    }
  };

  const getCheckboxesFields = (): IFormField[] => {
    switch (slug) {
      default:
        return [];
    }
  };

  return {
    getFormFields,
    getCheckboxesFields,
  };
};

export default useFormFields;
