import { useForm } from "react-hook-form";

function UserFormRegister1() {
    const { register } = useForm();

    return (
        <form>
            <input {...register("username")} placeholder="Username" />
            <button>Submit</button>
        </form>
    );
}

export default UserFormRegister1;