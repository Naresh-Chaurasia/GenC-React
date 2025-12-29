import { useForm } from "react-hook-form";

interface FormData {
    username: string;
}

function UserFormSubmit2() {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username")} placeholder="Username" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UserFormSubmit2;