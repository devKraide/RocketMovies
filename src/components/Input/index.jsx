import { InputContainer } from "./style";

export function Input({ icon: Icon, ...rest }) {
  return (
    <InputContainer>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </InputContainer>
  );
}