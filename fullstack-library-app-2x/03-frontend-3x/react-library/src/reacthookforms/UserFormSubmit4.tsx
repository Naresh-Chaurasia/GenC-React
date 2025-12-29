import { useForm } from "react-hook-form";

interface FormData {
    username: string;
    email: string;
    age: string; // or number, depending on your needs
}

function UserFormSubmit4() {
    // Update the useForm hook to use your FormData type
    const {
        register,
        handleSubmit,
        formState: { errors } // Contains validation errors for form fields, e.g., {username: {message: "Required"}} if validation fails
    } = useForm<FormData>();  // Add <FormData> generic type here


    // Now TypeScript knows that data is of type FormData
    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("username", { required: true })}
                placeholder="Username"
            />
            {errors.username && <p>Username is required</p>}

            <input
                {...register("email", { required: true })}
                placeholder="Email"
            />
            {errors.email && <p>Email is required</p>}

            <button type="submit">Submit</button>
        </form>
    );
}

export default UserFormSubmit4;