// SimpleFormWithHookForm.tsx
import { useForm } from 'react-hook-form';

type FormData = {
    username: string;
    email: string;
    password: string;
};

function SimpleFormWithHookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Form submitted:', data);
        // Handle form submission here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container">
            <div className="form-group">
                <label>Username</label>
                <input
                    {...register('username', { required: 'Username is required' })}
                    className={errors.username ? 'error' : ''}
                />
                {errors.username && (
                    <span className="error-message">{errors.username.message}</span>
                )}
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                        }
                    })}
                    className={errors.email ? 'error' : ''}
                />
                {errors.email && (
                    <span className="error-message">{errors.email.message}</span>
                )}
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 6,
                            message: 'Password must be at least 6 characters'
                        }
                    })}
                    className={errors.password ? 'error' : ''}
                />
                {errors.password && (
                    <span className="error-message">{errors.password.message}</span>
                )}
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default SimpleFormWithHookForm;