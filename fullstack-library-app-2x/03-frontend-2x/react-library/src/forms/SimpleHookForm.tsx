// Import the useForm hook from react-hook-form library
import { useForm } from "react-hook-form";

// Define the shape of our form data using TypeScript interface
interface FormData {
    username: string;  // Expects a string for username
    email: string;     // Expects a string for email
}

function SimpleHookForm() {
    // Initialize the form with TypeScript generics for type safety
    // register: Function to register form inputs
    // handleSubmit: Function to handle form submission
    const { register, handleSubmit } = useForm<FormData>();

    // Form submission handler
    // data will be of type FormData (contains username and email)
    const onSubmit = (data: FormData) => {
        console.log(data); // Log form data to console on submit
    };

    return (
        // handleSubmit will validate the form before calling onSubmit
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* 
                Register username input field
                - spread operator (...) registers the input with react-hook-form
                - "username" must match the FormData interface
            */}
            <input {...register("username")} placeholder="Username" />

            {/* 
                Register email input field
                - Similar to username but for email
                - "email" must match the FormData interface
            */}
            <input {...register("email")} placeholder="Email" />

            {/* Submit button for the form */}
            <button type="submit">Submit</button>
        </form>
    );
}

export default SimpleHookForm;