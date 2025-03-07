"use server";

export const register = async (prevData, formData) => {
    const errors = {};

    const OurUser = {
        email: formData.email,
        password: formData.password,
    };

    // Validate password
    if (typeof OurUser.password !== 'string' || OurUser.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long';
    }

    // Validate email
    if (typeof OurUser.email !== 'string' || !OurUser.email.includes('@')) {
        errors.email = 'Please enter a valid email address';
    }

    // Trim whitespace
    OurUser.email = OurUser.email.trim();
    OurUser.password = OurUser.password.trim();

    // Return errors if any
    if (Object.keys(errors).length > 0) {
        return {
            errors: errors,
            success: false,
        };
    }

    // Simulate successful registration
    return {
        errors: {},
        success: true,
    };
};