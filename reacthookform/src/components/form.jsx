import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function Form() {
  const schema = yup.object().shape({
    fullName: yup.string().required("your full name is required"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().min(18).required(),
    password: yup.string().min(6).max(10).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "password don't match")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" {...register("fullName")} />
      <span>{errors.fullName?.message}</span>
      <input type="text" placeholder="email" {...register("email")} />
      <span>{errors.email?.message}</span>

      <input type="number" placeholder="age" {...register("age")} />
      <span>{errors.age?.message}</span>

      <input type="password" placeholder="password" {...register("password")} />
      <span>{errors.password?.message}</span>

      <input
        type="password"
        placeholder="confirm password"
        {...register("confirmPassword")}
      />
      <span>{errors.confirmPassword?.message}</span>

      <input type="submit" />
    </form>
  );
}
