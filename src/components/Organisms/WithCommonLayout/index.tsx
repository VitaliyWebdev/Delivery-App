import CommonTitle from "@components/Atoms/CommonTitle";
import CommonFooter from "@components/Molecules/CommonFooter";
import CommonHeader from "@components/Molecules/CommonHeader";
import SafeViewWrapper from "@components/Templates/SafeViewWrapper";
import { TCommonHeader } from "@src/types/commonHeader";
import { TCommonTitle } from "@src/types/commonTitle";
import CommonForm from "@src/components/CommonForm";
import { FC } from "react";
import { TCommonForm } from "@src/types/commonForm";

type TWithCommonLayout = {
  onFormSubmit: () => void;
  headerProps: TCommonHeader;
  titleProps: TCommonTitle;
  formProps: TCommonForm;
};

const WithCommonLayout: FC<TWithCommonLayout> = (props) => {
  const { headerProps, titleProps, formProps } = props;
  
  return (
    <SafeViewWrapper>
      <CommonHeader {...headerProps} />
      <CommonTitle {...titleProps} />
      <CommonForm {...formProps} />
      <CommonFooter />
    </SafeViewWrapper>
  );
};

export default WithCommonLayout;
