import { useForm } from "react-hook-form";

interface FormData {
    username: string;
    email: string;
    age: string; // or number, depending on your needs
}

function UserFormSubmit3() {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username")} placeholder="Username" />
            <input {...register("email")} placeholder="Email" />
            <input {...register("age")} placeholder="Age" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UserFormSubmit3;