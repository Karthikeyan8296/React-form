import categories from "../categories";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  discription: z
    .string()
    .min(3, { message: "Description should be atleast 3 character" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is requied" })
    .min(0.01)
    .max(10000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <h3 className="title">
        <strong>Calculate your Expenses</strong>
      </h3>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="mb-3">
          <label htmlFor="description" className="form-lable">
            Description
          </label>
          <input
            {...register("discription")}
            id="description"
            type="text"
            className="form-control"
          />
          {errors.discription && (
            <p className="text-danger">{errors.discription.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="Amount" className="form-lable">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="Amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="Amount" className="form-lable">
            Category
          </label>
          <select
            {...register("category")}
            className="form-select"
            id="form-select"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
