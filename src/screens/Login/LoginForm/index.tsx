import LockIcon from "@src/assets/icons/LockIcon";
import PersonIcon from "@src/assets/icons/PersonIcon";
import Button from "@src/components/Button";
import Input from "@src/components/Input";
import { Formik } from "formik";
import { FC } from "react";
import { View } from "react-native";
import s from "./styles";
import { signInSchema } from "./schema";

type TInitialValues = {
  email: string;
  password: string;
};

const initialValues: TInitialValues = { email: "", password: "" };

type TLoginForm = {
  onSubmit: (values: TInitialValues) => void;
};

const LoginForm: FC<TLoginForm> = ({ onSubmit }) => {
  return (
    <View>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        validateOnChange={false}
        validateOnBlur={false}
        enableReinitialize={true}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, values, errors }) => {
          return (
            <>
              <Input
                inputProps={{
                  placeholder: "E-mail",
                  value: values.email,
                  onChangeText: handleChange("email"),
                }}
                iconLeft={<PersonIcon />}
                error={errors?.email}
              />
              <Input
                inputProps={{
                  placeholder: "Password",
                  value: values.password,
                  onChangeText: handleChange("password"),
                }}
                iconLeft={<LockIcon />}
                error={errors?.password}
              />
              <Button
                buttonProps={{
                  onPress: (e) => {
                    handleSubmit(e);
                  },
                  style: s.submitButton,
                }}
                textProps={{ style: s.buttonLabel }}
                label="Submit"
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

export default LoginForm;
